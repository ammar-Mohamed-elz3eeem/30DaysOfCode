import { handleActions } from "redux-actions";

const FETCH_MOVIE = "movies/FETCH_MOVIE";
const FETCH_MOVIES = "movies/FETCH_MOVIES";

const initialState = {
	movies: [],
	movie: {}
}

module.exports = {

	fetchMovieAction: (response) => ({
		type: FETCH_MOVIE,
		movie: response.data.data.movie
	}),

	fetchMoviesAction: (response) => ({
		type: FETCH_MOVIES,
		movies: response.data.data.movies
	}),
	
	reducer: handleActions({
		[FETCH_MOVIE]: (state, action) => ({
			...state,
			current: action.movie
		}),
		[FETCH_MOVIES]: (state, action) => ({
			...state,
			all: action.movies
		})
	}, initialState)

}