// JS pour le register & login

const overlayModalRegisterLogin = document.querySelector(".overlay-modalRegisterLogin");
const modalRegisterLogin = document.querySelector(".modalRegisterLogin");
const openRegister = document.querySelector(".register");
const openLogin = document.querySelector(".login");
const btnCloseModal = document.querySelector(".modalRegisterLogin__close")

openRegister.onclick = function() {
    overlayModalRegisterLogin.style.display = "block";
    modalRegisterLogin.style.display = "block";
}

openLogin.onclick = function() {
    overlayModalRegisterLogin.style.display = "block";
    modalRegisterLogin.style.display = "block";
}

btnCloseModal.onclick = function() {
    overlayModalRegisterLogin.style.display = "none";
    modalRegisterLogin.style.display = "none";
}

overlayModalRegisterLogin.addEventListener("click", (event) => {
    if (event.target === overlayModalRegisterLogin) {
        overlayModalRegisterLogin.style.display = "none";
        modalRegisterLogin.style.display = "none";
    }
})