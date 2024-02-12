var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTION_URL =
  "mongodb+srv://admin:<password>@cluster0.ebg5wym.mongodb.net/?retryWrites=true&w=majority";

var DATABASE_NAME = "splitcartdb";
var database;

app.listen(3000, () => {
  Mongoclient.connect(CONNECTION_URL, (error, client) => {
    database = client.db(DATABASE_NAME);
    console.log("Mongo DB Connection Successful");
  })
})
