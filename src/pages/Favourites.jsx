import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Favourites({ isFavourite, toggleFavourite, favourite }) {
  const [search, setSearch] = useState("");
  const filteredMovies = favourite.filter((movie) => {
    const searchQuery = search.toLowerCase().replace(/\s+/g, "");

    const titleSearch = movie.title
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchQuery);
    const yearSearch = movie.year
      .toString()
      .toLowerCase()
      .includes(searchQuery);
    const ratingSearch = movie.rating.toString().includes(searchQuery);
    return titleSearch || yearSearch || ratingSearch;
  });
  return (
    <div className="favourites-container">
      <h3>Welcome to Favourite Movies Page</h3>
      <input
        type="text"
        placeholder="search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {favourite.length === 0 && <p>No favourite movies</p>}
      <div className="movies-grid">
        {filteredMovies.map((m) => {
          return (
            <MovieCard
              key={m.id}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
              movie={m}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
