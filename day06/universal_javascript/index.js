const http = require("http");
const https = require("https");
const errorhandle = require("errorhandler");
const express = require("express");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const React = require("react");
require("babel-register")({
	presets: ['react']
})

const app = express();
const PORT = 3000;
const SPORT = 443;

app.set("view engine", "hbs");
const AboutFactory = React.createFactory(require("./components/About.jsx"));

app.get("/", (req, res) => {
	res.send("Hello!")
});

app.get("/about", (req, res) => {
	const AboutHTML = ReactDOMServer.renderToString(AboutFactory({name: "Ammar Massoud", url: "https://github.com/ammar-Mohamed-elz3eeem", job: "Software Engineer"}));
	res.render("about", {about: AboutHTML});
});

app.use('*', (req, res) => {
	response.status(404).send('Not found... did you mean to go to /about instead?')
});

app.use((error, req, res, next) => {
	console.error(request.url, error)
  	response.send('Wonderful, something went wrong...')
})

app.use(errorhandle);

http.createServer(app).listen(PORT, () => {
	console.log("app is up & running on port " + PORT);
})

try {
	const options = {
		key: fs.readFileSync("./server.key"),
		crt: fs.readFileSync("./server.crt")
	}
} catch (error) {
	console.warn('Cannot start HTTPS. \nCreate server.key and server.crt for HTTPS.')
}

if (typeof options != 'undefined') {
	https.createServer(app).listen(PORT, () => {
		console.log("app is up & running on SSL port " + SPORT);
	})
}