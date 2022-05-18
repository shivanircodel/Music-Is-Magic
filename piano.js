const keys = document.querySelectorAll(".key");
const note = document.querySelector(".nowplaying");
const hints = document.querySelectorAll(".hints");

function playNote(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!key) return;
	const keyNote = key.getAttribute("data-note");
	audio.currentTime = 0;
	audio.play();
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

function hintsOn(e, index) {
	e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}
hints.forEach(hintsOn);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playNote);