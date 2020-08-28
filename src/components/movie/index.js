import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function Movie() {
  let { movieID } = useParams()
  let [movieDetail, setMovieDetails] = useState(null)

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${movieID}?api_key=d395b794def74b8f16ec114b3268cee8`,
      headers: {},
    }
    Axios(config)
      .then(function (response) {
        setMovieDetails(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [movieID])

  console.log(movieDetail)
  return (
    <div className="Movie">
      <header className="Movie-header">
        <div>
          <img src="#" alt="Movie cover" />
        </div>
        <div>
          <h1>{movieDetail?.original_title}</h1>
          <h2>Movie tagline</h2>

          <b>Movie rating</b>
        </div>
      </header>

      <div>
        <p>Movie runtime</p>
        <p>Movie overview</p>
      </div>
    </div>
  )
}

export default Movie
