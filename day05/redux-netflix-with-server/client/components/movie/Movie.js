const React = require("react");
const { connect, useDispatch } = require("react-redux");
const { useParams } = require("react-router");
const { fetchMovieAction } = require("../../modules/reducers");
const styles = require("./movie.css")
const { Link } = require("react-router-dom");
const { useEffect } = require("react");
const clean = require("clean-tagged-string").default;
const axios = require("axios");

const Movie = (props) => {

	const {
		movie = {
		  starring: []
		}
	  } = props

	const params = useParams();

	useEffect(()=>{
		const query = `{
			movie(index: ${params.id}) {
				title,
				cover,
				year,
				cost,
			starring {
			  name
			}
			}
		}`;
		const api = axios.create({baseURL: "http://localhost:3001"});
		api.get(`/q?query=${query}`).then(res => {
			props.fetchMovie(res);
		});
		console.log(movie);
	}, [params.id])

	return (
		<div className={styles.movie} 
				style={{backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.625) 100%), url(${movie.cover})`}}>
			<div className={styles.cover} style={{backgroundImage: `url(${movie.cover})`}}></div>
			<div className={styles.description}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.year}>{movie.year}</div>
				<div className={styles.starring}>
					{movie.starring.map((actor, idx) => <div key={idx} className={styles.actor}>{actor.name}</div>)}
				</div>
			</div>
			<Link className={styles.closeButton} to="/movies">Back to Movies</Link>
		</div>
	);

}

module.exports = connect(({movies}) => ({movie: movies.current}), {fetchMovie: fetchMovieAction})(Movie)