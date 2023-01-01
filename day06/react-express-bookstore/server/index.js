import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import cors from "cors";
import mongoose from "mongoose";

const db = mongoose.connect("mongodb://localhost:27017/books", (err) => {
	console.error(err)
})



const app = express();
const connection = MongoClient.connect("mongodb://localhost:27017/books").then((connectionRes) => {
	app.use((req, res, next) => {
		req.books = connectionRes.db().collection("books");
		return next();
	})
	app.use(cors());
	app.use(bodyParser({extended: true}))
	app.use(bodyParser.json());
	app.get("/books", (req, res) => {
		req.books.find({}, {sort: {_id: -1}}).toArray((err, books) => {
			if (err) return (next(err));
			return res.json(books);
		})
	});
	app.post("/books", (req, res) => {
		req.books.insertOne(req.body, (err, book) => {
			if (err) return next(err);
			return res.json(book);
		})
	});
	app.get("/", (req, res) => {
		res.send("Welcome in Home page").end();
	})

	app.use(errorHandler());

	app.listen(3000, () => {
		console.log("App is up & running")
	})
})
.catch(err => {
	console.error("Error: Something wrong in db connection", err)
	process.exit(1)
})

// app.get("/", (req, res) => {
// 	res.send("Welcome in Home page").end();
// })

// app.use(errorHandler());

// app.listen(3000, () => {
// 	console.log("App is up & running")
// })