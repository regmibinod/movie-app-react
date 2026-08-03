import React from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import movies from "./data/movies";
function App() {
  // const movies = [
  //   {
  //     id:1,
  //     title: "unko sweater",
  //     rating: 7.0,
  //   },
  //   {
  //     id:2,
  //     title: "Khusma",
  //     rating: 7.5,
  //   },
  // ];
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      {movies.map((movie, index) => (
   
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
}

export default App;
