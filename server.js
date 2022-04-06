const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/test", (req, res, next) => {
  res.render("test");
});

app.listen(8080, () => {
  console.log("Listening at port 8080.");
});
