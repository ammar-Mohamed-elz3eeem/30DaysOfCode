const React = require("react");

const { Router, BrowserRouter, Route, Routes } = require("react-router-dom");
const { App } = require("./components/app/app");
const { Content } = require("./components/content/Content");
const MoviesConnection = require("./components/movies/Movies.js");
const MovieConnection = require("./components/movie/Movie.js");

module.exports = {
	AppRoutes: function() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Content />}>
						<Route index element={<App />}></Route>
						<Route exact path="/movies" element={<MoviesConnection />}>
							<Route index element={<MoviesConnection />}></Route>
							<Route exact path=":id" element={<MovieConnection />}></Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}