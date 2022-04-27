const audio = document.querySelector("#audio");
const image = document.querySelector("#image");
const button = document.querySelector("#button");
const birds = document.querySelectorAll(".birds");
let isPlaying = false;

// Functionality

const loadPage = function (bird = birds[0].id) {
  audio.src = `assets/audio/${bird}.mp3`;
  image.src = `assets/img/${bird}.jpg`;
};

const birdPlaySong = function () {
  audio.play();
  isPlaying ? isPlaying : (isPlaying = !isPlaying);
  button.style.backgroundImage = `url('assets/svg/pause.svg')`;
};

const buttonPlaySong = function () {
  isPlaying = !isPlaying;
  if (isPlaying) {
    audio.play();
    button.style.backgroundImage = `url('assets/svg/pause.svg')`;
  } else {
    audio.pause();
    button.style.backgroundImage = `url('assets/svg/play.svg')`;
  }
};

// Event listeners

loadPage();

button.addEventListener("click", buttonPlaySong);
birds.forEach((bird) => {
  bird.addEventListener("click", () => {
    birds.forEach((bird) => bird.classList.remove("active"));
    loadPage(bird.id);
    bird.classList.add("active");
    birdPlaySong();
  });
});
