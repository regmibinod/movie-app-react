import React from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import moviesData from "./data/movies";
import { useState } from "react";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [index, setIndex] = useState(0);

  function addMovie() {
    const demoMovies = [
      {
        id: Date.now(),
        title: "Batman",
        rating: 9.0,
        image: "",
      },
      {
        id: Date.now(),
        title: "Avengers",
        rating: 9.0,
        image: "",
      },
      {
        id: Date.now(),
        title: "Spider-man",
        rating: 9.0,
        image: "",
      },
    ];
    if (index >= demoMovies.length) return;

    setIndex(index + 1);
const movieAdd = demoMovies[index];
    setMovies([...movies, movieAdd]);
  }

  return (
    <>
      <Navbar />
      <h1>Home Page</h1>

      <button onClick={addMovie}>Add Demo Movie</button>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
}

export default App;
