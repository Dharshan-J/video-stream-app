$(document).ready(function () {
  $("#btn").on("click", function () {
    $("#video").html(
      "<source src='" + $("#url").val() + "' type='application/x-mpegURL'>"
    );
    var ply = videojs("video");
    ply.play();
  });
});

const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  preload: "auto",
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
  enableVolumeScroll: false,
});

player.src({
  src: "http://sample.vodobox.com/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  type: "application/x-mpegURL",

  withCredentials: false,
});
