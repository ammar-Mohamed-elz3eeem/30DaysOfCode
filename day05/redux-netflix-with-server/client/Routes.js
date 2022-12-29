import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/app/App";
import MoviesStore from './components/movies/Movies';
import MovieStore from './components/movie/Movie'

const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index></Route>
				<Route path="movies" element={<MoviesStore></MoviesStore>}>
					<Route path=":id" element={<MovieStore></MovieStore>}></Route>
				</Route>
			</Route>
			<Route path="/names" element={<App />}></Route>
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;