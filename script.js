const audio = new Audio();
audio.src = "Audio/Sound.mp3"

function playAudio() {
    audio.currentTime = 0;
	audio.play();
}