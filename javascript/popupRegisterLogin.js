// JS pour le register & login

/* Sélection des éléments */
const overlayModalRegisterLogin = document.querySelector(".overlay-modalRegisterLogin");
const modalRegisterLogin = document.querySelector(".modalRegisterLogin");
const openRegister = document.querySelectorAll(".register");
const openLogin = document.querySelectorAll(".login");
const btnCloseModal = document.querySelector(".modalRegisterLogin__close");
const signupButton = document.querySelector("#signup-button");
const loginButton = document.querySelector("#login-button");
const switcherSlider = document.querySelector(".switcher-slider");
const formSignup = document.querySelector("#form-signup");
const formLogin = document.querySelector("#form-login");
const formPasswordForgot = document.querySelector("#form-forgot-password");
const linkToFormPasswordForgot = document.querySelector(".forgot-pswd");
const spanToSigninModal = document.querySelector("#go-to-signin");
const spanToSignupModal = document.querySelector("#go-to-signup");
const modalHeader = document.querySelector(".modalRegisterLogin__header");
const spanToLoginModal = document.querySelector(".spanPassword");

/* Fonction pour changer l'état actif */
function switchToSignup() {
    switcherSlider.style.transform = "translateX(0%)";
    formSignup.classList.add("visible");
    formSignup.classList.remove("hidden");
    formLogin.classList.add("hidden");
    formLogin.classList.remove("visible");
    formPasswordForgot.classList.add("hidden");
    formPasswordForgot.classList.remove("visible");
    modalHeader.classList.add("visible");
    modalHeader.classList.remove("hidden");
}

function switchToLogin() {
    switcherSlider.style.transform = "translateX(100%)";
    formLogin.classList.add("visible");
    formLogin.classList.remove("hidden");
    formSignup.classList.add("hidden");
    formSignup.classList.remove("visible");
    formPasswordForgot.classList.add("hidden");
    formPasswordForgot.classList.remove("visible");
    modalHeader.classList.add("visible");
    modalHeader.classList.remove("hidden");
}

function switchToPasswordForgot() {
    formPasswordForgot.classList.add("visible");
    formPasswordForgot.classList.remove("hidden");
    formLogin.classList.add("hidden");
    formLogin.classList.remove("visible");
    formSignup.classList.add("hidden");
    formSignup.classList.remove("visible");
    modalHeader.classList.add("hidden");
    modalHeader.classList.remove("visible");
}

/* Événements pour l'ouverture du modal */
openRegister.forEach(btn => {
    btn.onclick = function() {
        overlayModalRegisterLogin.style.display = "block";
        modalRegisterLogin.style.display = "block";
        switchToSignup();
    }
})

openLogin.forEach(btn => {
    btn.onclick = function() {
        overlayModalRegisterLogin.style.display = "block";
        modalRegisterLogin.style.display = "block";
        switchToLogin();
    }
})

/* Événements pour les boutons swipe du modal */
signupButton.addEventListener("click", switchToSignup);
loginButton.addEventListener("click", switchToLogin);

/* Événement pour le forgot password */
linkToFormPasswordForgot.addEventListener("click", switchToPasswordForgot);

/* Événement pour le span du forgot password qui ouvre le login modal */
spanToLoginModal.addEventListener("click", switchToLogin);

/* Événements pour les spans qui changent la modal */
spanToSigninModal.addEventListener("click", switchToLogin);
spanToSignupModal.addEventListener("click", switchToSignup);

/* Événement pour le bouton de fermeture du modal */
btnCloseModal.onclick = function() {
    overlayModalRegisterLogin.style.display = "none";
    modalRegisterLogin.style.display = "none";
}

/* Événement pour la fermeture du modal en appuyant en dehors du modal */
overlayModalRegisterLogin.addEventListener("click", (event) => {
    if (event.target === overlayModalRegisterLogin) {
        overlayModalRegisterLogin.style.display = "none";
        modalRegisterLogin.style.display = "none";
    }
})