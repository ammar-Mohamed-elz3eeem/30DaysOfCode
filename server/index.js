const mysql = require("mysql")
const app = require("express")();
const port = 5151;

const connection = mysql.createConnection({
	host: "localhost",
	user: "ammar",
	password: "Za158269347",
	database: "test_express"
});

app.post("/user", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log(username, password);
	connection.query(`SELECT * FROM users WHERE username = ${username}`, (err, result) => {
		if (err) res.status(500).json(err).end();
		console.log(result)
		res.status(200).json(result);
	})
});

app.get("/", (req, res) => {
	res.status(200).json({"pagename": "Home Page"}).end();
})

app.listen(port, () => {
	console.log("app is runing");
	console.log(connection.state);
})