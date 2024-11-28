// // JS pour le pop-up des films

// const overlayModalMovie = document.querySelector(".overlay-modalMovie");
// const modalMovie = document.querySelector(".modalMovie");
// const openModalMovie = document.querySelectorAll(".imageOpenModal");
// const btnCloseModalMovie = document.querySelector(".modalMovie__close")
// const imgModalMovie = document.querySelector(".imageModalMovie");

// const openModal = (event) => {
//     overlayModalMovie.style.display = "block";
//     modalMovie.style.display = "block";
//     imgModalMovie.src = event.target.src;
// }

// openModalMovie.forEach(image => {
//     image.addEventListener("click", openModal)
// })

// btnCloseModalMovie.onclick = function() {
//     overlayModalMovie.style.display = "none";
//     modalMovie.style.display = "none";
// }

// overlayModalMovie.addEventListener("click", (event) => {
//     if (event.target === overlayModalMovie) {
//         overlayModalMovie.style.display = "none";
//         modalMovie.style.display = "none";
//     }
// })