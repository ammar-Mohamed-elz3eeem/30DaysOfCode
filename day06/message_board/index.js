require("babel-register")({
	presets: ['react']
});

const express = require("express"),
	  monogodb = require("mongodb"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  logger = require("morgan"),
	  errorhandler = require("errorhandler"),
	  compression = require("compression"),
	  ReactDOMServer = require("react-dom/server"),
	  React = require('react'),
	  validator = require("express-validator"),
	  url = `mongodb://localhost:27017/board`;

const Header = React.createFactory(require("./components/Header.jsx")),
 	  Footer = React.createFactory(require("./components/Header.jsx")),
	  MessageBoard = React.createFactory(require("./components/Header.jsx"))


monogodb.MongoClient.connect(url, (err, db) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(compression());
	app.use(logger("dev"));
	app.use(errorhandler());
	app.use(bodyParser.json());
	app.use(validator());
	app.use(express.static("public"));

	app.use((req, res, next) => {
		req.messages = db.db().collection("messages");
		return next();
	});

	app.get("/messages", (req, res, next) => {
		req.messages.find({}, 
			{sort: {_id: -1}}).toArray((err, docs) => {
			if (err) return next(err);
			return res.json(docs);
		})
	});

	app.post("/messages", (req, res, next) => {
		req.checkBody('message', 'Invalid message in body').notEmpty()
		req.checkBody('name', 'Invlid name in body').notEmpty()
		var errors = req.validationErrors();
		if (errors) return next(errors);
		console.log(req.messages);
		console.log(req.body)
		req.messages.insertOne(req.body, (err, result) => {
			if (err) return next(err);
			return res.json(result);
		})
	});

	app.get("/", (req, res, next) => {
		req.messages.find({}, 
			{sort: {_id: -1}}).toArray((err, docs) => {
			if (err) return next(err);
			res.render('index', {
				heaser: ReactDOMServer.renderToString(Header()),
				footer: ReactDOMServer.renderToString(Footer()),
				messageBoard: ReactDOMServer.renderToString(MessageBoard({
					messages: docs
				})),
				props: '<script type="text/javascript">var messages='+JSON.stringify(docs)+'</script>'
			})
		})
	});

	app.listen(3000);
})

app.set("view engine", "hbs");