const express = require("express");
const moviePage = require("../utils/movie-util");
const [getMoviesByGenre, getMovieDetails] = require("../schema/movie-schema");

const router = express.Router();

router.get("/:movieName", getMetadata, (req, res) => {
  res.render("moviePage.ejs", {
    movie: res.movie,
  });
});

async function getMetadata(req, res, next) {
  res.movie = await getMovieDetails(req.params.movieName.trim());
  next();
}

module.exports = router;
