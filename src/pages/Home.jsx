import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../api/movieApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
function Home({isFavourite, toggleFavourite}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
 

  // const isFavorite = (movie) => {
  //   return favorite.some((fav) => fav.id === movie.id);
  // };

  // const toggleFavorite = (movie) => {
  //   if (isFavorite(movie)) {
  //     const deleteFav = favorite.filter((fav) => fav.id !== movie.id);
  //     setFavorite(deleteFav);
  //   } else {
  //     setFavorite((prev) => [...prev, movie]);
  //   }
  // };

  async function fetchMovies() {
    try {
      setError("");
      setLoading(true);
      const data = await getPopularMovies();
      const formattedData = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : "/no-image.jpg",
          year: new Date(movie.release_date).getFullYear(),
          rating: movie.vote_average.toFixed(1),
        };
      });
      setMovies(formattedData);
    } catch (error) {
      setError("Failed to load movies");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const searchValue = search.toLocaleLowerCase().replace(/\s+/g, "");
    const titleSearch = movie.title
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchValue);
    const ratingSearch = movie.rating.toString().includes(searchValue);
    const yearSearch = movie.year.toString().includes(searchValue);
    return titleSearch || ratingSearch || yearSearch;
  });

  return (
    <div className="home-container">
      <h1>Home Page</h1>

      {error && <p className="error-message">{error}</p>}

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movie"
        className="search-input"
      />

      {!loading && filteredMovies.length === 0 && (
        <p className="no-results">No movies found</p>
      )}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              toggleFavourite={toggleFavourite}
              isFavourite={isFavourite}
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
