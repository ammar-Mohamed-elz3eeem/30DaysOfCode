const React = require("react");
const { connect, useDispatch } = require("react-redux");
const { useParams } = require("react-router");
const { fetchMovieActionCreator } = require("../../modules/movies");
const styles = require("./movie.css")
const { Link } = require("react-router-dom");
const { useEffect } = require("react");

const Movie = (props) => {

	const { id } = useParams();	
	const {
		movie = {
			starring: []
		}
	} = props

	useEffect(() => {
		props.fetchMovie(id);
		console.log(props);
	}, [id])

	const starring = movie.starring.map((actor, index) => {
		<div className="actor" key={index}>
			{actor.name}
		</div>
	})

	return (
		<div className="single-movie-page">
			<div className="movie" 
		     	 style={{backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.625) 100%), url(${movie.cover})`}}>
				<div className="cover" style={{backgroundImage: `url(${movie.cover})`}}></div>
				<div className="description">
					<div className="title">{movie.title}</div>
					<div className="year">{movie.year}</div>
					<div className="starring">
						{starring}
					</div>
				</div>
				<Link className="closeButton" to="/movies">Back to Movies</Link>
			</div>
		</div>
	);

}

module.exports = connect(({movies}) => ({movie: movies.current}), {fetchMovie: fetchMovieActionCreator})(Movie);