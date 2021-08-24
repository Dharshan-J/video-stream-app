const searchBar = document.querySelector("#search_bar");
const noSeachMessage = document.querySelector(".no-search-message");
const searchResults = document.querySelector(".search-results");
const movieResults = document.querySelector(".movie-results");
const movie_names = [
    "Godzilla", "Avengers End Game", "Lord Of The Rings", "Dune",
    "Interstellar", "Skyfall", "Joker", " Back To The Future", "Inception"];


searchBar.addEventListener("input", (e) => {
    if (e.target.value.length === 0) {
        noSeachMessage.classList.toggle("d-none");
        movieResults.classList.toggle("d-none");
    }
    else {
        noSeachMessage.classList.toggle("d-none");
        movieResults.classList.toggle("d-none");
        while (movieResults.firstChild) movieResults.removeChild(movieResults.lastChild);

        movie_names.forEach((movie) => {
            //movie.toLowerCase().startsWith(e.target.value)
            if (movie.toLowerCase().includes(e.target.value)) {
                 console.log(movie)
                let movieCard = document.createElement("div")
                let movieNamePath = movie.replace(/\s/g, "");
                let html = `<div class="row movie-card"><img src="../public/images/${movieNamePath}.jpg"alt="" class="movie-card-image col-6 p-0"><div class="movie-about col-6"><p id="movie_title" class="d-inline">${movie} </p><p id="movie_about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptatum fuga minima inventore voluptates sequi optio aspernatur quibusdam dignissimos. Non nemo sit ducimus fugiat mollitia cupiditate at officiis voluptatibus ipsum.</p></div></div>`;
                movieCard.className = "d-flex justify-content-center";
                movieCard.innerHTML = html;
                movieResults.appendChild(movieCard);
            }
        })
        


    }
})



