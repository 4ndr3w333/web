// Para ver la imagen en un modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img01");
const closeBtn = document.querySelector(".close-btn");

const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Funciones para los botones de descarga y selección
document.querySelectorAll(".download-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        alert(`Imagen ${index + 1} descargada!`);
    });
});

document.querySelectorAll(".select-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        alert(`Imagen ${index + 1} seleccionada para impresión/revelado!`);
    });
});
