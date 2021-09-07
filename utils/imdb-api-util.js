const axios = require("axios");
const { response } = require("express");
const Movie = require("../utils/movie-util");

async function getPopularGenres() {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/list-popular-genres",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let genres = [];
  try {
    let res = await axios.request(options);
    res.data.genre.forEach((genreObject) => {
      genres.push(genreObject);
    });
  } catch (error) {
    console.log(error);
  }
  return genres;
}

async function getMoviesByGenre(genreEndpoint) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre",
    params: { genre: genreEndpoint },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let movies = [];
  try {
    let res = await axios.request(options);
    res.data.forEach((movieString) => {
      movies.push(movieString.split("/")[2]);
    });
  } catch (error) {
    console.log(error);
  }
  return movies;
}

async function getSynopsis(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-synopses",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let synopsis = "";
  try {
    let res = await axios.request(options);
    synopsis = res.data.split(".")[0];
  } catch (error) {}

  return synopsis;
}

async function getCast(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-top-cast",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let cast = [];
  try {
    let res = await axios.request(options);
    res.data.forEach((nameId) => {
      cast.push(nameId.split("/")[2]);
    });
  } catch (error) {
    console.log(error);
  }
  return cast;
}
async function getRating(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-ratings",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let ratings = 0;
  //   try {
  //     let res = await axios.request(options);
  //     ratings = res.data.rating;
  //   } catch (error) {
  //     console.log(error);
  //   }
  return ratings;
}
async function getMetaCritic(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-metacritic",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let metaCritic = 0;
  try {
    let res = await axios.request(options);
    metaCritic = res.data.metaCritic;
  } catch (error) {
    console.log(error);
  }
  return metaCritic;
}

async function getPlayback(videoId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-video-playback",
    params: { viconst: videoId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let videoUrl = "";
  try {
    let res = await axios.request(options);
    res.data.encodings.forEach((encodingObj) => {
      if (encodingObj.mimeType === "application/x-mpegurl") {
        videoUrl = encodingObj.playUrl;
      }
    });
  } catch (error) {
    //console.log(error);
  }
  return videoUrl;
}

async function getVideoUrl(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-videos",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let video = null;
  try {
    let res = await axios.request(options);
    res.data.resource.videos.forEach((videoObj) => {
      if (videoObj.contentType === "Clip") {
        video = getPlayback(videoObj.id.split("/")[2]);
      }
    });
  } catch (error) {
    console.log(error);
    }
    console.log(video)
  return video;
}

async function getMovieDetails(movieId, genre) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-details",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d",
    },
  };
  let movie = null;
  try {
    let res = await axios.request(options);
    movie = new Movie(
      genre,
      res.data.runningTimeInMinutes,
      res.data.title,
      getSynopsis(movieId),
      getCast(movieId),
      getRating(movieId),
      getMetaCritic(movieId),
      res.data.image.url,
      getVideoUrl(movieId)
    );
  } catch (error) {
    console.log(error);
  }
  return movie;
}


getVideoUrl("tt0944947").then(console.log(response))

//tt0944947
//vi3877612057
