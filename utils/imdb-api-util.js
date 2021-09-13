const axios = require("axios");
const Movie = require("../utils/movie-util");
const key = "4e8c0b9c0dmshd988cda3aa1b0d6p15a114jsnf780dfb5ac9c";


async function getGenre(movieId) {
  let options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-genres',
    params: {tconst: movieId},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': key
    }
  };
  let genre = "";
  try {
    let res = await axios.request(options);
    //console.log(res.data);
    genre = res.data[0];
  } catch (error) {
    console.log(error);
  }
  return genre;
}

async function getBio(nameId) {
  var options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
    params: {nconst: nameId},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': key
    }
  };
  let name=""
  try {
    let res = await axios.request(options);
    console.log(res.data.name);
    name = res.data.name;
  } catch (error) {
    console.log(error);
  }
  return name;

}

async function getMovie(name) {
  let  options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/find',
    params: {q: name},
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': key
    }
  };
  let id;
  try {
    let res = await axios.request(options);
    console.log(res.data.results[0].id.split("/")[2]);
    id=res.data.results[0].id.split("/")[2]
  } catch (error) {
    console.log(error)
  }
  
  return id;
}


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
    console.log(error.config.data);
  }

  return movieObj;
}

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
    // console.log(res.data)
    synopsis = res.data[0].text.split(".")[0];
    if (res.data[0].text) synopsis = res.data[0].text.split(".")[0];
  } catch (error) {
    console.log(error);
  }

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
  let metaCritic = null;
  try {
    let res = await axios.request(options);
    console.log(res.data)
    metaCritic = {
      score: res.data.metaScore,
      time: res.data.title.runningTimeInMinutes,
      imageUrl:res.data.title.image.url
    } 
    
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

// getPopularGenres().then(res => {
//   console.log(res);
// })



module.exports = [
  getPopularGenres,
  getCast,
  getMetaCritic,
  getMoviesByGenre,
  getRating,
  getPlayback,
  getVideoUrl,
  getMovieDetails,
  getMovieDetail,
  getBio,
  getMovie,
  getSynopsis,
  getGenre
];
