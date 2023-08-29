document.addEventListener('DOMContentLoaded', () => {
  let currentSongIndex = 0;
  let songs = ["song1", "song2", "song3",];
  let song = document.getElementById(songs[currentSongIndex]);
  let progress = document.getElementById("progress");
  let ctrlIcon = document.getElementById("ctrlIcon");
  let songTitles = [
    "Despacito",
    "Sohni",
    "Toota Taara"
  ];
  let singerNames = [
    "Luis Fonsi Ft. Puerti Rican",
    "Ammy Virk",
    "Stebin Ben"
  ];

  song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
  }

  function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
      song.pause();
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    } else {
      song.play();
      ctrlIcon.classList.add("fa-pause");
      ctrlIcon.classList.remove("fa-play");
    }
  }

  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);

  progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }

  ctrlIcon.addEventListener('click', playPause);

  document.querySelector(".fa-forward-step").addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    song.pause();
    song.currentTime = 0;
    song = document.getElementById(songs[currentSongIndex]);
    updateSongInfo();
    playPause();
  });
  
  document.querySelector(".fa-backward-step").addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    song.pause();
    song.currentTime = 0;
    song = document.getElementById(songs[currentSongIndex]);
    updateSongInfo();
    playPause();
  });
  function updateSongInfo() {
    let songInfoDivs = document.querySelectorAll(".song-info");
    for (let i = 0; i < songInfoDivs.length; i++) {
      if (i === currentSongIndex) {
        songInfoDivs[i].style.display = "block";
      } else {
        songInfoDivs[i].style.display = "none";
      }
    }
  }

  updateSongInfo();
});

