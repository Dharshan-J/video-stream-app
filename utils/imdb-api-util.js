const axios = require("axios");
const Movie = require("../utils/movie-util");

async function getPopularGenres() {
    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/list-popular-genres',
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d'
        }
    };
    let genres = [];
    try {
        let res = await axios.request(options);
        res.genre.forEach((genreObject) => {
            genres.push(genreObject);
        })
    } catch (error) {
        console.log(error);
    }
    return genres;
}


async function getMoviesByGenre(genreEndpoint) {
    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre',
        params: {genre:genreEndpoint },
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d'
        }
    };
    let movies = [];
    try {
        let res = await axios.request(options);
        res.forEach((movieString) => {
            movies.push(movieString.split("/")[2]);
        })
    } catch (error) {
        console.log(error);
    }
    return movies;
    
}




async function getSynopsis(movieId) {
    let  options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-synopses',
        params: {tconst: movieId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d'
        }
    };
    let synopsis = "";
    try {
        let res = await axios.request(options);
        synopsis = res.split(".")[0];
    } catch (error) {
        
    }
    
    return synopsis;
}

async function getCast(movieId) {
    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-cast',
        params: {tconst: movieId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d'
        }
    };
    let cast = [];
    try {
        let res = await axios.request(options);
        res.forEach((nameId) => {
            cast.push(nameId.split("/")[2]);
        })
        
    } catch (error) {
        console.log(error);
    }
    return cast;
      
}

async function getMovieDetails(movieId,genre) {
    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-details',
        params: {tconst: 'tt0944947'},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': '5047769fb4msh196706800ad01b4p1a92e6jsn07d749e9f20d'
        }
    };
    let movie = null;
    try {
        let res = await axios.request(options);
        movie = new Movie(genre, res.runningTimeInMinutes, res.title, getSynopsis(movieId), getCast(movieId), getRating(movieId), getMetaCritic(movieId), res.image.url, getVideoUrl(movieId));

    } catch (error) {
        console.log(error);
    }
    return movie;
}