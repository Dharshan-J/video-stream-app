const wishlistBtnLove = document.querySelector(".wishlist-btn-love");
const wishlistBtnLike = document.querySelector(".wishlist-btn-like");
const movieImg= document.querySelector("#movie_image");
const movieTitleDiv= document.querySelector("#movie_title");
const movieAboutDiv=document.querySelector("#movie_about");
const undoDiv=document.querySelector(".undo-div");




wishlistBtnLike.addEventListener("click", () => {
    wishlistBtnLike.classList.toggle("d-none");
    wishlistBtnLove.classList.toggle("d-none");
    movieImg.classList.toggle("d-none");
    movieAboutDiv.classList.toggle("d-none");
    undoDiv.classList.toggle("d-none");

})
undoDiv.addEventListener("click", () => {

    wishlistBtnLove.classList.toggle("d-none");
    wishlistBtnLike.classList.toggle("d-none");
    movieImg.classList.toggle("d-none");
    movieAboutDiv.classList.toggle("d-none");
    undoDiv.classList.toggle("d-none");

})