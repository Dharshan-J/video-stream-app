// $(document).ready(function () {
//   $("#btn").on("click", function () {
//     $("#video").html("<source src='" + $("#url").val() + "' type='application/x-mpegURL'>");
//     var ply = videojs("video");
//     ply.play();
//   });
// });

const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  // preload: "auto",
  preferFullWindow: true,
  html5: {
    vhs: {
      withCredentials: true,
    },
  },
});

player.hotkeys({
  volumeStep: 0.1,
  seekStep: 30,
  enableModifiersForNumbers: false,
});

// player.src({
//   src: <%-JSON.stringify(videoUrl)%>,
//   type: "application/x-mpegURL",
//   withCredentials: false,
// });
