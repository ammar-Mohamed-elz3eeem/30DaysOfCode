const { useEffect } = require("react");
const React = require("react");
const { connect } = require("react-redux");
const { Link, Outlet } = require("react-router-dom");
const { fetchMoviesActionCreator } = require("../../modules/movies");
const movies = require("../../movies.json");
const styles = require("./movies.css");

class Movies extends React.Component {

	componentDidMount() {
		this.props.fetchMovies(movies)
	}

	render() {
		
		const moviesUI = movies.map( (movie, index) => (
			<div key={index} className="movie-link">
				<Link to={`/movies/${index + 1}`}>
					<div className="movie" style={{ backgroundImage: `url(${movie.cover})` }}></div>
				</Link>
			</div>
		))

		return (
			<div className="movies-page">
				<Outlet />
				<div className="movies">
					<div className="list">
						{moviesUI}
					</div>
				</div>
			</div>
		);
	}
}

module.exports = connect( (payload) => {
	console.log(payload.movies)
	return {movies: payload.movies.all}
}, { fetchMovies: fetchMoviesActionCreator })(Movies)