import React from 'react'

function MovieCard(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>⭐ Rating: {props.rating}</p>
    </div>
  )
}

export default MovieCard