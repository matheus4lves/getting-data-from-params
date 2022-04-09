const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.post("/greetings", (req, res, next) => {

app.get("/welcome/:fname/:lname", (req, res, next) => {
  res.render("welcome", { fname: req.params.fname, lname: req.params.lname });
});

app.get("/test", (req, res, next) => {
  res.render("test");
});

app.listen(8080, () => {
  console.log("Listening at port 8080.");
});
