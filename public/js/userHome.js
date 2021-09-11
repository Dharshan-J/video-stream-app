const wishlistBtnLove = document.querySelectorAll(".wishlist-btn-love");
const wishlistBtnLike = document.querySelectorAll(".wishlist-btn-like");
const movieCards = document.querySelectorAll(".movie-card");

for (let i = 0; i < wishlistBtnLove.length; i++) {
    let btn = wishlistBtnLove[i];
    btn.addEventListener("click", () => {
        btn.classList.toggle("d-none");
        wishlistBtnLike[i].classList.toggle("d-none");
      });

}
for (let i = 0; i < wishlistBtnLike.length; i++) {
    let btn = wishlistBtnLike[i];
    btn.addEventListener("click", () => {
        btn.classList.toggle("d-none");
        wishlistBtnLove[i].classList.toggle("d-none");
      });

}

movieCards.forEach(card => {
  console.log(card.children)

  //movie-name card.children[1].children[0].innerText
})

