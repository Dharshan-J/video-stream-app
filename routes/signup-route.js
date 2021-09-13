const express = require("express");
const User = require("../utils/user-util");
const [
  addUser,
  getUser,
  updateUser,
  addMovie,
  deleteMovie,
] = require("../schema/user-schema");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("signup.ejs", {});
});

router.get("/authenticate", authenticateUserDetails, (req, res) => {
  console.log("result " + res.user);
  if (!res.user) res.status(401).json(res.user);
  else res.status(200).json(res.user);
});

async function authenticateUserDetails(req, res, next) {
  let isUserExists = await getUser(
    req.query.name.toLowerCase(),
    req.query.mail
  );
  let _user = null;
  console.log("res " + isUserExists);
  if (isUserExists === "null") {
    console.log("create user");
    _user = new User(
      req.query.name.toLowerCase(),
      req.query.mail,
      req.query.password
    );
    await addUser(_user);
    res.user = _user;
  }
  next();
}

module.exports = router;
