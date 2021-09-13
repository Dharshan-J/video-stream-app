const express = require("express");
const Movie = require("../utils/movie-util");
const [getMoviesByGenre] = require("../schema/movie-schema");

const router = express.Router();

router.get("/", fetchMovies, (req, res) => {
  // console.log(res.movies);
  res.render("userHome.ejs", { movies: res.movies });
});

//TODO:add wishlisted movie to DB

async function fetchMovies(req, res, next) {
  const genres = ["Adventure", "Action", "Animation", "SciFi", "Horror"];
  const movies = [];

  for (let i = 0; i < genres.length; i++) {
    try {
      let result = await getMoviesByGenre(genres[i]);
      movies.push(result.movies);
    } catch (error) {
      console.log(error);
    }
  }

  res.movies = movies;
  next();
}

module.exports = router;
