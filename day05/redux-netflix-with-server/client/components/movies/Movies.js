const React = require("react");
const { connect } = require("react-redux");
const { Link, Outlet, useParams } = require("react-router-dom");
const { fetchMoviesAction } = require("../../modules/reducers");

const styles = require("./movies.css");
const axios = require("axios");
const clean = require("clean-tagged-string").default;

const Movies = (props) => {
	
	const { movies = [] } = props;
	
	React.useEffect(() => {
		const query = clean`{
			movies {
				title,
				cover
			}
		}`;
		const appAxios = axios.create({
			baseURL: "http://localhost:3001",
		});
		appAxios.get(`/q?query=${query}`).then(res => {
			props.fetchMovies(res)
		})
	}, []);

	const params = useParams();

	return (
		<div className={styles.movies}>
        	<div className={params.id ? styles.listHidden : styles.list}>
          		{movies.map((movie, index) => (
					<Link
						key={index}
						to={`/movies/${index + 1}`}>
						<div
							className={styles.movie}
							style={{backgroundImage: `url(${movie.cover})`}} />
					</Link>
         		))}
        	</div>
        	<Outlet />
      	</div>
	);
}

module.exports = connect( ({movies}) => {
		return {movies: movies.all}
	}, { fetchMovies: fetchMoviesAction })(Movies)