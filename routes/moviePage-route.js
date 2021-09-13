const express = require("express");
const moviePage = require("../utils/movie-util");
const [getMoviesByGenre,getMovieDetails]=require("../schema/movie-schema")

const router = express.Router();

router.get("/:movieName", getMetadata, (req, res) => {
  console.log(res.movie)
  res.render("moviePage.ejs", {movie:res.movie
  });
  console.log(req.params)
  
  
});

async function getMetadata(req, res, next) {
  res.movie = await getMovieDetails(req.params.movieName);
  next();
}



module.exports = router;
