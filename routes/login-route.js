const express = require("express");
const User = require("../utils/user-util");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("loginPage.ejs", {});
});

router.get("/authenticate", authenticateUserDetails, (req, res) => {
  res.status(200).json(res.user);
});

function authenticateUserDetails(req, res, next) {
  //auhtenticate user details nd get user name from DB and create a user object out of it then send it as a response

  let name = "dharshan"; //from db
  let user = new User(name, req.query.mail, req.query.password);
  res.user = user;
  next();
}

module.exports = router;
