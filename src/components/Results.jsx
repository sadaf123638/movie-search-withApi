import React from "react";
import './Results.css';

const Results = ({ movies }) => {
  return (
    <div className="results-section">
      {movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No results found.</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;

