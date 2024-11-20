const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const thumbnails = document.querySelectorAll(".thumbnail");


/* Ajouter un gestionnaire d'événement sur chaque miniature dans une classe */
export class User {
  static choose() {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        /* console.log("ok") */
        const imageSrc = thumbnail.getAttribute("data-src"); // Récupérer la source de l'image
        modalImage.setAttribute("src", imageSrc); // Injecter la source dans la modale
        modal.style.display = "flex"; // Afficher la modale
      });
    });
  }
}