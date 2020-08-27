import React from 'react'

function Movie() {
  return (
    <div className="Movie">
      <header className="Movie-header">
        <h1>Movie name here</h1>
        <h2>Movie tagline</h2>

        <img src="#" alt="Movie cover" />

        <b>Movie rating</b>
      </header>

      <div>
        <p>Movie runtime</p>
        <p>Movie overview</p>
      </div>
    </div>
  )
}

export default Movie
