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
});

player.src({
  src: "https://imdb-video.media-imdb.com/vi3877612057/hls-1616202333253-master.m3u8?Expires=1631095126&Signature=GIMgOse5azWmUdI7dB7RRMWPuVxHIHxLR-MMTC0fWwqNA8SZOK8uHnnIgZVO-V6ih1mnvphQlX00VHyAbS96FP7k5CKNR-PnvAIqNwFci0swnK9fZd0CTQ8i7equtiSCeUTCr9K4TM2CYgwSUlQTY~YOTBlfGP~34MvykMZLrFeFyK1bpj4iLl0HumFpj6UskeOw6yx5uwcXgE5ZJpIWyaxH9fY1126BZ771~eY85iN6jFIYSIMC365syI5mXmmYoiZmBXoPK004ruPs-rDQ-tkEze878yKhKOYHKNnMzezM1mUf-ZjKfEpaFkGp9Ynf4-JCPx1RsJ~e34SWynfs4A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
  type: "application/x-mpegURL",
  withCredentials: false,
});
