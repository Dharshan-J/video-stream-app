class Movie {
  constructor(
    genre,
    runningTime,
    name,
    synopsis,
    cast,
    imdbRating,
    metaCritic,
    posterUrl,
    videoUrl
  ) {
    this._genre = genre;
    this._runningTime = runningTime;
    this._name = name;
    this._synopsis = synopsis;
    this._cast = cast;
    this._imdbRating = imdbRating;
    this._metaCritic = metaCritic;
    this._posterUrl = posterUrl;
    this._videoUrl = videoUrl;
  }

  get genre() {
    return this._genre;
  }

  get runningTime() {
    return this._runningTime;
  }

  get name() {
    return this._name;
  }

  get cast() {
    return this._cast;
  }

  get imdbRating() {
    return this._imdbRating;
  }

  get metaCritic() {
    return this._metaCritic;
  }

  get posterUrl() {
    return this._posterUrl;
  }

  get videoUrl() {
    return this._videoUrl;
  }

  set genre(genre) {
    this._genre = genre;
  }

  set runningTime(time) {
    this._runningTime = time;
  }

  set name(name) {
    this._name = name;
  }

  set cast(cast) {
    this._cast = cast;
  }

  set imdbRating(rating) {
    this._imdbRating = rating;
  }

  set metaCritic(critic) {
    this._metaCritic = critic;
  }

  set posterUrl(url) {
    this._posterUrl = url;
  }

  set videoUrl(url) {
    this._videoUrl = url;
  }
}

module.exports = Movie;
