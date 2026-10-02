const form = document.querySelector("#contact-form");
const success = document.querySelector("#form-success");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    success.textContent = "Je bericht is succesvol verzonden!";
    success.classList.add("show");

    form.reset();
});