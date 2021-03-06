const express = require("express");
const ejs = require("ejs");
const https = require("https");
const path = require("path");
const signupRouter = require("./routes/signup-route");
const loginRouter = require("./routes/login-route");
const userHomeRouter = require("./routes/userHome-route");
const moviePageRouter = require("./routes/moviePage-route");
const videoPlayerRouter = require("./routes/videoPlayer-route");

const app = express();
const server = https.createServer(app);

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/userHome", userHomeRouter);
app.use("/moviePage", moviePageRouter);
app.use("/videoPlayer", videoPlayerRouter);

app.get("/", (req, res) => {
  res.render("home.ejs", {});
});

app.get("/home", (req, res) => {
  res.render("home.ejs", {});
});

app.get("/search", (req, res) => {
  res.render("search.ejs", {});
});

app.get("/wishlist", (req, res) => {
  res.render("wishlist.ejs", {});
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs", {});
});

app.get("/profile", (req, res) => {
  res.render("profile.ejs", {});
});



app.get("/profile", (req, res) => {
  res.render("profile.ejs", {});
});


app.listen(5000, () => {
  console.log("server running");
});
