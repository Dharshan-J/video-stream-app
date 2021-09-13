const { json } = require("express");
const Mongoose = require("mongoose");
const { get } = require("../routes/userHome-route");
const Movie = require("../utils/movie-util");

const movieSchema = Mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  movies: {
    type: Array,
    required: true,
  },
});

const movieModel = Mongoose.model("movieModel", movieSchema);

async function getMovieDetails(movie) {
  try {
    let res = await movieModel.findOne({
      "movies.name":movie
    })
    let result = null;
    res.movies.forEach(element => {
      //console.log(element.name.normalize()===movie.normalize())
      if (element.name.normalize() === movie.normalize()) { result= element; }
    });
    return result;
  } catch (error) {
    console.log(error)
  }
  
  
}

async function getMoviesByGenre(_genre) {
  try {
    let res = await movieModel.findOne({
      genre: _genre,
    });
    return res;
  } catch (error) {
    console.log("error");
  }
}

Mongoose.connect("mongodb://localhost:27017/video-stream-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DB = Mongoose.connection;

DB.on("error", () => {
  console.log("error when connecting to DB");
});

DB.once("open", () => {
  console.log("Connected to DB");
});



module.exports = [getMoviesByGenre,getMovieDetails];
