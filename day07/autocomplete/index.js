require("@babel/register")({
	presets: ['@babel/preset-react']
});

console.log("My name is ammar massoud")

const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const { body, validationResult } = require("express-validator");
const errorhandler = require("errorhandler");
const compression = require("compression");
const exphbs = require("express-handlebars");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const path = require("path");
const url = "mongodb://localhost:27017/autocomplete";
const PORT = 3000;
const AutoComplete = require("./src/AutoComplete.jsx").default
const schema = require("./schema/schema");

const db = mongodb.MongoClient.connect(url).then((cdb) => {
	const app = express();

	app.use(compression());
	app.use(errorhandler());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(express.static("public"));
	
	app.engine('.hbs', exphbs.engine({extname: ".hbs", defaultLayout: "index", layoutsDir: path.join(__dirname, "views")}));
	
	app.set('views', path.resolve(__dirname, "views"));
	app.set("view engine", ".hbs");

	app.use((req, res, next) => {
		req.rooms = cdb.db().collection("rooms");
		return next();
	})

	app.get("/", (req, res, next) => {
		var url = "http://localhost:3000/rooms";
		// req.rooms.find({}, {sort: {_id: -1}}).toArray((err, rooms) => {
		// 	if (err) return next(err);
			res.render('index', {
				autocomplete: ReactDOMServer.renderToString(React.createElement(AutoComplete, {options: null, url})),
				data: `<script type="text/javascript">window.__autocomplete_data = {
					rooms: null,
					url: '${url}'
				}</script>`
			})
		// })
	});

	app.use("/q", graphqlHTTP((req) => ({
		"schema": schema,
		"context": req.session,
	})))

	app.get("/rooms", (req, res, next) => {
		req.rooms.find({}, {sort: {_id: -1}}).toArray((err, data) => {
			if (err) return next(err);
			return res.status(200).json(data).end();
		})
	})

	app.post("/rooms", body('room_name', 'Invalid name in body').notEmpty(), (req, res, next) => {
		let errors = validationResult(req.body);
		console.log(req.body);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array() })
		}
		req.rooms.insert(req.body, function(err, done) {
			if (err) return next(err);
			return res.json(done);
		})
	})

	app.listen(PORT, () => {
		console.log("App is up & running");
	})
	
}).catch(err => {process.exit(1); console.error(err)})