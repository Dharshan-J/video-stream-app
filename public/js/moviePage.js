const watchBtn = document.querySelector("#watch");
 

watchBtn.addEventListener("click", (event) => {
  console.log("click");
  window.location.href = `http://localhost:5000/videoPlayer/${window.document.title}`;
});
