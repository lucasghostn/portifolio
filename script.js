// ======================
// Troca de vídeos com fade
// ======================

// Lista dos vídeos
const videos = ["video1.mp4", "video2.mp4"];
let current = 0;
const videoElement = document.getElementById("bg-video");

// Função para carregar o vídeo com transição suave
function loadVideo(index) {
  videoElement.classList.add("fade-out");
  setTimeout(() => {
    videoElement.src = videos[index];
    videoElement.play();
    videoElement.classList.remove("fade-out");
  }, 800); 
}

videoElement.addEventListener("ended", () => {
  current = (current + 1) % videos.length; 
  loadVideo(current);
});

loadVideo(current);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
