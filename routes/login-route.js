const express = require("express");
const User = require("../utils/user-util");
const [
  addUser,
  getUser,
  updateUser,
  addMovie,
  deleteMovie,
  getUserSecondary,
] = require("../schema/user-schema");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("loginPage.ejs", {});
});

router.get("/authenticate", authenticateUserDetails, (req, res) => {
  if (!res.user) res.status(401).json(res.user);
  else res.status(200).json(res.user);
});

async function authenticateUserDetails(req, res, next) {
  let user = null;
  try {
    let res = await getUserSecondary(req.query.mail);
    if (res) {
      if (req.query.password === res.password) {
        user = res;
      }
    }
  } catch (error) {
    console.log(error);
  }

  res.user = user;
  next();
}

module.exports = router;
