import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies} from "../api/movieApi";
function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchMovies() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
    try {
      setError("");
      setLoading(true);
      const data = await getPopularMovies() || [];
      const formattedData = data.map((movie) => {
        console.log(movie)
        return {
          id: movie.id,
          title: movie.title,
          image: movie.poster_path? `${IMAGE_BASE_URL}${movie.poster_path}` :"/no-image.jpg",
          year: movie.release_date,
          rating: movie.vote_average
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
  return (
    <div>
      <h1>Home Page</h1>
      {error &&<p>{error}</p> }
      {loading ? (
        <div>Loading.....</div>
      ) : (
        movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })
      )}
    </div>
  );
}

export default Home;
