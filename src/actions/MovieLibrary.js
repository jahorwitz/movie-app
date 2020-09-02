import { ActionTypes } from '../shared/actionTypes';
import library from '../shared/movies.json'
import axios from 'axios';

export const FetchAllMovieDetails = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.FETCH_ALL_MOVIE_DETAILS_REQUEST
    });
    const config = (movie) => ({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movie}?api_key=d395b794def74b8f16ec114b3268cee8`,
        headers: {},
    })

    try {
        let promises = []

        for (let movie in library) {
            promises.push(axios(config(library[movie])))
        }

        let allMovies = await Promise.all(promises)

        dispatch({
            type: ActionTypes.FETCH_ALL_MOVIE_DETAILS_SUCCESS,
            payload: allMovies.map((m) => {
                return m.data
            })
        });
    } catch (err) {
        dispatch({
            type: ActionTypes.FETCH_ALL_MOVIE_DETAILS_ERROR,
            error: err
        })
    }
}