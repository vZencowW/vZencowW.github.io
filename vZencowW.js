document.addEventListener('DOMContentLoaded', function() {
    const quote = document.querySelector('.quote');
    quote.setAttribute('readonly', true);
});

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
playPauseBtn.style.backgroundImage = "url('play.png')";
const timeDisplay = document.getElementById('time');
const volumeSlider = document.getElementById('volume');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.add('playing');
        playPauseBtn.style.backgroundImage = "url('pause.png')"; 
    } else {
        audio.pause();
        playPauseBtn.classList.remove('playing');
        playPauseBtn.style.backgroundImage = "url('play.png')"; 
    }
});

audio.addEventListener('timeupdate', () => {
    const current = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${current} / ${duration}`;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}