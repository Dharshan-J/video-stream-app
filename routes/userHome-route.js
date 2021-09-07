const express = require("express");
const Movie = require("../utils/movie-util");
const [
  getPopularGenres,
  getCast,
  getMetaCritic,
  getMoviesByGenre,
  getRating,
  getPlayback,
  getVideoUrl,
  getMovieDetails,
] = require("../utils/imdb-api-util");

const router = express.Router();

router.get("/", fetchMovies, (req, res) => {
    console.log(res.movies)
  res.render("userHome.ejs", { movies: res.movies });
});

async function fetchMovies(req, res, next) {
  try {
    let movieIds = [];
      let genreObjs = await getPopularGenres();
      for (let i = 0; i < 5; i++) {
          let obj = genreObjs[i];
        let movieId= await getMoviesByGenre(obj.endpoint)
          movieIds.push({
            genre: obj.description,
            ids:movieId,
          });
      }
      
    let movies = [];
    movieIds.forEach( (obj) => {
        obj.ids.forEach(async(id) => {
            let movieTitle = await (id);
        movies.push(movie);
      });
    });

    res.movies = movies;
  } catch (error) {
    console.log(error);
  }

  next();
}

module.exports = router;
