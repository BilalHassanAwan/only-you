const greetings = [
  "Sajjal, you're the kind of girl a heart writes code for... effortlessly, beautifully, uniquely.",
  "From the moment I saw you, the world shifted. My code started running in loops — all leading to you.",
  "You’re not just a name anymore... you’re a feeling, a glow, a spark I couldn’t ignore any longer."
];

function showMessage(index) {
  const messageBox = document.getElementById('message-box');
  messageBox.textContent = greetings[index];
  messageBox.style.display = 'block';
}

function showLoveLetter() {
  const letter = document.getElementById('love-letter');
  letter.classList.toggle('hidden');
}

// Music rotation
const songs = [
  "./music/agar_tum_saath_ho.mp3",
  "./music/tum_hi_ho.mp3",
  "./music/raabta.mp3"
];

let currentSong = 0;
const audio = document.getElementById("bg-music");
audio.src = songs[currentSong];

audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
});
