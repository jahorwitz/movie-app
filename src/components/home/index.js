import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

function Home({ movies }) {
  return (
    <div className="Movie">
      <header className="Movie-header">
        {movies?.map((m) => {
          return (
            <div key={m.id}>
              <Link to={`/movie/${m.id}`}>
                <h1>{m.original_title}</h1>
              </Link>
              <h2>{m.tagline}</h2>
            </div>
          )

          // <img src="#" alt="Movie cover" />

          // <b>Movie rating</b>
        })}
      </header>
      <div>
        <p>Movie runtime</p>
        <p>Movie overview</p>
      </div>
    </div>
  )
}

export default Home
