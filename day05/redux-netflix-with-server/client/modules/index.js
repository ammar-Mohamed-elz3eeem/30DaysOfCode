import { combineReducers } from "redux";
const { reducer: movies } = require("./reducers");

export default combineReducers({ movies });