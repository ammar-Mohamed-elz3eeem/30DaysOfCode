import { combineReducers } from "redux";

const reducer = require("./module").default;

export const reduceFunctions = combineReducers({reducer: reducer.reducer});