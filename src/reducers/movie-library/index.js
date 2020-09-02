	
import { combineReducers } from 'redux'
import { ActionTypes } from '../../shared/actionTypes';

const initialState = {
    isFetching: false,
    movies: [],
    error: null
}

function movieLibraryReducer(currentState = initialState, action) {
  switch (action.type){
    case ActionTypes.FETCH_ALL_MOVIE_DETAILS_REQUEST:
        return {
            ...currentState,
            isFetching: true
        }
    case ActionTypes.FETCH_ALL_MOVIE_DETAILS_SUCCESS:
      return {
          ...currentState,
          isFetching: false,
          movies: action.payload
      }
    case ActionTypes.FETCH_ALL_MOVIE_DETAILS_ERROR:
      return {
          ...currentState,
          isFetching: false,
          error: action.error
      };
    default:
      return currentState;
  }
}
 
export default combineReducers({
  movieReducer: movieLibraryReducer
});