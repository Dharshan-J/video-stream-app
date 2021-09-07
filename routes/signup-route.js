const express = require("express");
const User = require("../utils/user-util");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("signup.ejs", {});
});

router.get("/authenticate", authenticateUserDetails, (req, res) => {
  res.status(200).json(res.user);
});

function authenticateUserDetails(req, res, next) {
    //check db for existing user 
  const _user = new User(req.query.name, req.query.mail, req.query.password);
  res.user = _user;
  next();
}

module.exports = router;
