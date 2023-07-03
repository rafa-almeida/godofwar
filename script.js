//Background
var imgAtual = "images/fundo1.jpg";
var imgAnterior = "images/fundo2.jpg";
var imgAnterior1 = "images/fundo3.jpg";
var imgAnterior2 = "images/fundo4.jpg";

function trocar() {
  document.getElementById("trocaimagem").src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
  aux = imgAtual;
  imgAtual = imgAnterior1;
  imgAnterior1 = aux;
  aux = imgAtual;
  imgAtual = imgAnterior2;
  imgAnterior2 = aux;
}

//Player
var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;

pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.width = playPercent + "px";

  var secondsIn = Math.floor((music.currentTime / duration / 3.5) * 100);
  if (secondsIn <= 9) {
    timer.innerHTML = "0:0" + secondsIn;
  } else {
    timer.innerHTML = "0:" + secondsIn;
  }
}

playButton.onclick = function () {
  music.play();
  playButton.style.visibility = "hidden";
  pause.style.visibility = "visible";
};

pauseButton.onclick = function () {
  music.pause();
  playButton.style.visibility = "visible";
  pause.style.visibility = "hidden";
};

music.addEventListener(
  "canplaythrough",
  function () {
    duration = music.duration;
  },
  false
);
