<<<<<<< HEAD

$(document).ready(function() {
  $("#btn").on("click", function() {
    $("#video").html("<source src='"+ $("#url").val() +"' type='application/x-mpegURL'>");
=======
$(document).ready(function () {
  $("#btn").on("click", function () {
    $("#video").html(
      "<source src='" + $("#url").val() + "' type='application/x-mpegURL'>"
    );
>>>>>>> bd8cbf07e84b16ac22d166697af436f82c847220
    var ply = videojs("video");
    ply.play();
  });
});
<<<<<<< HEAD
=======

>>>>>>> bd8cbf07e84b16ac22d166697af436f82c847220
const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  preload: "auto",
  preferFullWindow: true,
  html5: {
    vhs: {
<<<<<<< HEAD
      withCredentials: true
    }
  }
=======
      withCredentials: true,
    },
  },
>>>>>>> bd8cbf07e84b16ac22d166697af436f82c847220
});

player.hotkeys({
  volumeStep: 0.1,
<<<<<<< HEAD
    seekStep: 30,
    enableModifiersForNumbers: false
});

player.src({
      src: "http://sample.vodobox.com/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  type: "application/x-mpegURL",
      withCredentials:false
   
})

=======
  seekStep: 30,
  enableModifiersForNumbers: false,
  enableVolumeScroll: false,
});

player.src({
  src: "http://sample.vodobox.com/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  type: "application/x-mpegURL",

  withCredentials: false,
});
>>>>>>> bd8cbf07e84b16ac22d166697af436f82c847220
