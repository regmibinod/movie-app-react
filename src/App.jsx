import React from 'react'
import Navbar  from './components/Navbar';
import MovieCard from './components/MovieCard';
function App() {
  return (
  <>
  <Navbar />
  <h1>Home Page</h1>
  <MovieCard title="Black Sails" rating={8.6} />
  <MovieCard title="Viking" rating={9.2} />
  </>
  )
}

export default App