const mediaContainer = document.getElementById('media-container');
const mediaArray = [
    'imagen1.png',
    'vid1.mp4',
    'imagen2.png',
    'vid2.mp4'
];
let currentIndex = 0;

function changeMedia() {
    const currentMedia = mediaArray[currentIndex];
    const extension = currentMedia.split('.').pop();

    mediaContainer.innerHTML = ''; // Limpiar el contenedor

    // Crear contenedor para la imagen o video con dimensiones específicas
    const mediaElement = document.createElement(extension === 'mp4' ? 'video' : 'img');
    mediaElement.src = `img/${currentMedia}`;
    mediaElement.style.width = '250px';
    mediaElement.style.height = '325px';
    mediaElement.style.objectFit = 'cover'; // Ajusta el contenido sin distorsionar

    if (extension === 'mp4') {
        mediaElement.autoplay = true;
        mediaElement.muted = true;
        mediaElement.loop = true;
    }

    mediaContainer.appendChild(mediaElement);

    currentIndex = (currentIndex + 1) % mediaArray.length;
}

// Inicializar con la primera imagen o video
changeMedia();

// Cambiar cada 5 segundos
setInterval(changeMedia, 5000);

// Generar corazones dinámicos
const heartsContainer = document.querySelector('.hearts');

// Para asegurar que los primeros corazones aparezcan de inmediato
createHearts(10);

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Duración aleatoria
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // Elimina el corazón después de 10 segundos
}

// Crear múltiples corazones iniciales
function createHearts(num) {
    for (let i = 0; i < num; i++) {
        createHeart();
    }
}

// Generar corazones cada segundo
setInterval(createHeart, 500);
