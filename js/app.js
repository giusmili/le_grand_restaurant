import {User} from './event.js'

document.addEventListener("DOMContentLoaded", (e) => {
  const closeModal = document.querySelector(".close");

  User.choose();

  /*   Fermer la modale  */
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  /* Ferme la modale en cliquant à l'extérieur */
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
