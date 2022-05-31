// day 1

"use strict";

window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`div[data-key="${event.key}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
function removeTransition(e) {
  if (e.propertyName === "transform") return;

  this.classList.remove("playing");
}
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
