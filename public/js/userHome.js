const wishlistBtnLove = document.querySelector(".wishlist-btn-love");
const wishlistBtnLike = document.querySelector(".wishlist-btn-like");





wishlistBtnLove.addEventListener("click", () => {
    wishlistBtnLove.classList.toggle("d-none");
    wishlistBtnLike.classList.toggle("d-none");
})

wishlistBtnLike.addEventListener("click", () => {
    wishlistBtnLike.classList.toggle("d-none");
    wishlistBtnLove.classList.toggle("d-none");
})

