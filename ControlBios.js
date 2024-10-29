// Carrusel de fotos
const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Sustituye con tus rutas de imágenes
let currentIndex = 0;

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carousel-image").src = images[currentIndex];
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("carousel-image").src = images[currentIndex];
});