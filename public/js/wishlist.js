const wishlistBtnLove = document.querySelector(".wishlist-btn-love");
const wishlistBtnLike = document.querySelector(".wishlist-btn-like");
const movieImgDiv = document.querySelector("#movie_image");
const movieTitleDiv= document.querySelector("#movie_title");
const movieAboutDiv=document.querySelector("#movie_about");
const undoBtn=document.querySelector("#undo_btn");
undoBtn.classList.add("undo1");
document.querySelector(".movie-about").classList.remove("disable");



wishlistBtnLike.addEventListener("click", () => {
    wishlistBtnLike.classList.toggle("d-none");
    wishlistBtnLove.classList.toggle("d-none");
    undoBtn.classList.remove('undo1');
    undoBtn.classList.add("undo-btn");
    movieAboutDiv.classList.remove("hover");
    movieImgDiv.classList.toggle("disable");
    movieTitleDiv.classList.toggle("disable");
})
undoBtn.addEventListener("click", () => {

    wishlistBtnLove.classList.toggle("d-none");
    wishlistBtnLike.classList.toggle("d-none");  
    movieAboutDiv.classList.add("hover"); 
    undoBtn.classList.add('undo1');
    movieImgDiv.classList.toggle("disable");
    movieTitleDiv.classList.toggle("disable");
})
