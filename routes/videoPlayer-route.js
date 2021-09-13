const Express = require("express");
const [getMoviesByGenre, getMovieDetails] = require("../schema/movie-schema");

const router = Express.Router();

router.get("/:movieName", fetchMovieUrl, (req, res) => {
  res.render("videoPlayer.ejs", { videoUrl: res.movie.videoUrl });
});

async function fetchMovieUrl(req, res, next) {
  res.movie = await getMovieDetails(req.params.movieName.trim());
  next();
}

module.exports = router;
