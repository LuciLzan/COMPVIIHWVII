function MovieCard({ movie,favorites,setFavorites }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
          {!favorites.some(favMovie => (favMovie.id === movie.id)) ?
              <button className="favorite-button" onClick={() => setFavorites([...favorites, movie])}>♡ Add to Favorites</button>:
              <button className="favorite-button" onClick={() => setFavorites(favorites.filter((favMovie) => favMovie.id !== movie.id))}>Remove from Favorites</button>
          }

      </div>
    </div>
  );
};

export default MovieCard;