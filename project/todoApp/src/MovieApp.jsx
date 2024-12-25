import React, { useState } from "react";

function MovieApp() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Dark Knight", year: 2008 },
  ];

  const [likedMovies, setLikedMovies] = useState([]);

  const toggleLike = (id) => {
    setLikedMovies((prev) =>
      prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title} ({movie.year})</span>
            <button onClick={() => toggleLike(movie.id)}>
              {likedMovies.includes(movie.id) ? "Unlike" : "Like"}
            </button>
          </li>
        ))}
      </ul>
      <h2>Liked Movies</h2>
      <ul>
        {movies
          .filter((movie) => likedMovies.includes(movie.id))
          .map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default MovieApp;
