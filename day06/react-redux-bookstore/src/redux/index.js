import { combineReducers } from "redux";
const reducer = require("./module").default;

const reduceFunctions = combineReducers({reducer: reducer.reducer});

export default reduceFunctions;