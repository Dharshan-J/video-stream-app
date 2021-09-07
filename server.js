const express = require("express");
const ejs = require("ejs");
const https = require("https");
const path = require("path");
const signupRouter = require("./routes/signup-route");
const loginRouter = require("./routes/login-route");


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
app.use('/login',loginRouter)


app.get("/", (req, res) => {
  res.render("home.ejs", {});
});

app.get("/home", (req, res) => {
  res.render("home.ejs", {});
});


app.get("/userHome", (req, res) => {
  res.render("userHome.ejs", {});
});

app.get("/search", (req, res) => {
  res.render("search.ejs", {});
});

app.get("/wishlist", (req, res) => {
  res.render("wishlist.ejs", {});
});
app.get("/contact",(req,res)=>{
  res.render("contact.ejs",{});
});

app.get("/profile",(req,res)=>{
  res.render("profile.ejs",{});
})

app.get("/videoPlayer",(req,res)=>{
  res.render("videoPlayer.ejs",{});
})
<<<<<<< HEAD

app.get("/moviePage",(req,res)=>{
  res.render("moviePage.ejs",{})
})

app.get("/moviePage",(req,res)=>{
  res.render("moviePage.ejs",{})
})
=======
<<<<<<< HEAD
app.get("/moviePage",(req,res)=>{
  res.render("moviePage.ejs",{})
})
=======
>>>>>>> branchJD

app.get("/moviePage",(req,res)=>{
  res.render("moviePage.ejs",{})
})

<<<<<<< HEAD
=======
>>>>>>> bd8cbf07e84b16ac22d166697af436f82c847220
>>>>>>> branchJD
app.listen(5000, () => {
  console.log("server running");
});
