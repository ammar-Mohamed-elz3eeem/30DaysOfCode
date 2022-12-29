const path = require("path");
const express = require("express");
const expressGraphQl = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const { PWD } = process.env;
const PORT = 3001;

const app = express();
app.use(cors())


app.use("/dist", express.static(path.resolve(PWD, 'build', 'public')));

app.use("/q", expressGraphQl(req => ({
	schema,
	context: req.session,
	graphiql:true
})), (req, res) => {
	console.log(res)
	console.log(req)
});
app.use("*", (req, res) => {
	res.sendFile("index.html", {
		root: PWD
	})
});

app.listen(PORT, () => console.log(`Server is up & running on port: ${PORT}`));