const axios = require("axios");
const Movie = require("../utils/movie-util");

<<<<<<< HEAD
<<<<<<< HEAD
const key = "8750407883mshb1ac941a807382fp153811jsnc07cb90e5e01";
=======
=======
>>>>>>> branchJD
const key = "a87110ff3amsha569ade2617f50ep1d531cjsn11ca1fd19aa5";

async function getMovieDetail(movieId, genre) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-details",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  };
  let movieObj;
  try {
    let res = await axios.request(options);
    movieObj = {
      imageUrl: res.data.image.url,
      title: res.data.title,
      genre: genre,
    
    };
  } catch (error) {
    console.log(error);
  }

  return movieObj;
}
<<<<<<< HEAD
>>>>>>> branchJD
=======
>>>>>>> branchJD

async function getPopularGenres() {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/list-popular-genres",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  };
  let genres = [];
  try {
    let res = await axios.request(options);
    res.data.genres.forEach((genreObject) => {
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
      "x-rapidapi-key": key,
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
      "x-rapidapi-key": key,
    },
  };
  let synopsis = "";
  try {
    let res = await axios.request(options);
<<<<<<< HEAD
<<<<<<< HEAD
    synopsis = res[0].text.split(".")[0];
  } catch (error) {}
=======
=======
>>>>>>> branchJD
    if (res.data[0].text) synopsis = res.data[0].text.split(".")[0];
  } catch (error) {
    console.log(error);
  }
<<<<<<< HEAD
>>>>>>> branchJD
=======
>>>>>>> branchJD

  return synopsis;
}

async function getCast(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-top-cast",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key,
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
      "x-rapidapi-key": key,
    },
  };
  let ratings = 0;
  try {
    let res = await axios.request(options);
    ratings = res.data.rating;
  } catch (error) {
    console.log(error);
  }
  return ratings;
}
async function getMetaCritic(movieId) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-metacritic",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key,
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
      "x-rapidapi-key": key,
    },
  };
  let videoUrl = "";
  try {
    let res = await axios.request(options);
    res.data.resource.encodings.forEach((encodingObj) => {
      if (encodingObj.mimeType === "application/x-mpegurl") {
        videoUrl = encodingObj.playUrl;
      }
    });
  } catch (error) {
    console.log(error);
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
      "x-rapidapi-key": key,
    },
  };
  let video = null;
  try {
    let res = await axios.request(options);
    video = res.data.resource.videos[0].id.split("/")[2];
  } catch (error) {
    console.log(error);
  }
  return video;
}

async function getMovieDetails(movieId, genre) {
  let options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-details",
    params: { tconst: movieId },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": key,
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

<<<<<<< HEAD
<<<<<<< HEAD
// getMovieDetails("tt0416449", "genre").then((res) => {
=======
// getSynopsis("tt0416449").then((res) => {
>>>>>>> branchJD
=======
// getSynopsis("tt0416449").then((res) => {
>>>>>>> branchJD
//   console.log(res);
// });

/*{
    description: 'Adventure',
    endpoint: '/chart/popular/genre/adventure'
  }, */
<<<<<<< HEAD

module.exports = [
  getPopularGenres,
  getCast,
  getMetaCritic,
  getMoviesByGenre,
  getRating,
  getPlayback,
  getVideoUrl,
  getMovieDetails,
<<<<<<< HEAD
];

//tt0416449
//vi213123353
=======
=======

module.exports = [
  getPopularGenres,
  getCast,
  getMetaCritic,
  getMoviesByGenre,
  getRating,
  getPlayback,
  getVideoUrl,
  getMovieDetails,
>>>>>>> branchJD
  getMovieDetail,
];

//tt0416449
<<<<<<< HEAD
//vi213123353
>>>>>>> branchJD
=======
//vi213123353
>>>>>>> branchJD
