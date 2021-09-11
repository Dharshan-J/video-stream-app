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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  getMovieDetail,
>>>>>>> branchJD
=======
  getMovieDetail,
>>>>>>> branchJD
] = require("../utils/imdb-api-util");

const router = express.Router();

router.get("/", fetchMovies, (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> branchJD
  res.render("userHome.ejs", { movies: res.movies });
});

// router.get("/fetchMovies", fetchMovies, (req, res) => {
//   res.status(200).json(res.movies);
// });

async function fetchMovies(req, res, next) {
  let movies = [[], [], []];
  try {
    let movieIds = [];
    let genreObjs = await getPopularGenres();

    for (let i = 0; i < 3; i++) {
      let obj = genreObjs[i];
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let movieId = await getMoviesByGenre(obj.endpoint);
      movieIds.push({
        genre: obj.description,
        ids: movieId,
      });

      movieIds.forEach(async (movieObj) => {
        for (let i = 0; i < Math.min(movieObj.ids.length, 3); i++) {
          let movie = await getMovieDetail(movieObj.ids[i], movieObj.genre);
          if (movieObj.genre == "Adventure") movies[0].push(movie);
          if (movieObj.genre == "Animation") movies[2].push(movie);
          else movies[1].push(movie);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // console.log(movies);
  res.movies = movies;
<<<<<<< HEAD
>>>>>>> branchJD
=======
>>>>>>> branchJD
  next();
}

module.exports = router;
