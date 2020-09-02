import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './Home.scss'
import { FetchAllMovieDetails } from '../../actions/MovieLibrary';
import Home from '../../components/home';

function HomeContainer({movies, FetchAllMovieDetails}) {

  console.log(movies);
  useEffect(() => {
    FetchAllMovieDetails();
  }, [])

  return (
    <Home movies={movies}/>
  )
}

	
const mapStateToProps = state => {
  return {
    movies: state.movieLibrary.movieReducer.movies
  };
}

export default connect(
  mapStateToProps,
  { FetchAllMovieDetails }
)(HomeContainer)

