import "../styles/movieCard.css";
function MovieCard({ movie, isFavourite, toggleFavourite }) {
  const { title, rating, year, image, id } = movie;
const fav = isFavourite(id);
  return (
    <div className="movie-card">
      <button
        className="favorite-toggle"
        onClick={() => toggleFavourite(movie)}
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      >
        {fav ? "♥" : "♡"}
      </button>
      <img src={image} alt={title} />

      <div className="movie-content">
        <h2> {title}</h2>

        <div className="movie-meta">
          <p>⭐ {rating}</p>
          <p>📅 Release : {year}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
