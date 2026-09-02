import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";

function App() {
  const [favourite, setFavourite] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favourite"));
    return saved ? saved : [];
  });

  const isFavourite = (movieId) => {
    return favourite.some((m) => m.id === movieId);
  };
  const toggleFavourite = (movie) => {
    setFavourite((prev) => {
      if (prev.some((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
              favourite={favourite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
