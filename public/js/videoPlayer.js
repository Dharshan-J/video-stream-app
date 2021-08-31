const player = videojs("my-video", {
  controls: true,
  autoplay: false,
  preload: "auto",
  fluid: true,
  preferFullWindow: true,
  sources: [
    {
      src: "../public/videos/big_buck_bunny_720p_1mb.mp4",
      type: "video/mp4",
    },
  ],
});
