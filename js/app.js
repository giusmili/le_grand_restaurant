import {User} from './event.js'

document.addEventListener("DOMContentLoaded", (e) => {
  // const el = document.querySelector("h1")
  const closeModal = document.querySelector(".close");

 /*  console.info(el.tagName);
  console.log(el.tagName);
  console.warn(el.tagName);
  console.error(el.tagName); */

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
