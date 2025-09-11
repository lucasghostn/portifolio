const videos = ["video1.mp4", "video2.mp4"];
let current = 0;
let activeVideo = 0; // alterna entre 0 e 1
const videoElements = [
  document.getElementById("video1"),
  document.getElementById("video2")
];

// Função para trocar vídeos com crossfade
function loadVideo(index) {
  const nextVideo = videoElements[1 - activeVideo]; // o que vai entrar
  const currentVideo = videoElements[activeVideo];  // o que está tocando

  nextVideo.src = videos[index];
  nextVideo.load();

  nextVideo.oncanplay = () => {
    nextVideo.play();
    nextVideo.classList.add("active");       // fade-in no novo
    currentVideo.classList.remove("active"); // fade-out no antigo
    activeVideo = 1 - activeVideo;           // troca o vídeo ativo
  };
}

// Quando o vídeo atual termina, troca para o próximo
videoElements[activeVideo].addEventListener("ended", () => {
  current = (current + 1) % videos.length;
  loadVideo(current);
});

// Inicia com o primeiro vídeo
videoElements[activeVideo].src = videos[current];
videoElements[activeVideo].classList.add("active");
videoElements[activeVideo].play();

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
