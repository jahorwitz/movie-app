import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import library from '../../shared/movies.json'
import './Home.scss'

function Movie() {
  let [movies, setMovies] = useState([])

  useEffect(() => {
    const config = (movie) => ({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movie}?api_key=d395b794def74b8f16ec114b3268cee8`,
      headers: {},
    })

    const afunc = async () => {
      let promises = []

      for (let movie in library) {
        promises.push(Axios(config(library[movie])))
      }

      let allMovies = await Promise.all(promises)

      setMovies(
        allMovies.map((m) => {
          return m.data
        }),
      )
    }

    afunc()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Movie">
      <header className="Movie-header">
        {movies.map((m) => {
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

export default Movie
