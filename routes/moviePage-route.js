const express = require("express");
const moviePage = require("../utils/movie-util");

const router = express.Router();
const [
    getPopularGenres,
    getCast,
    getMetaCritic,
    getMoviesByGenre,
    getRating,
    getPlayback,
    getVideoUrl,
    getMovieDetails,
    getMovieDetail,
  ] = require("../utils/imdb-api-util");

router.get("/", (req, res) => {
  res.render("moviePage.ejs", {});
});


  module.exports = router;