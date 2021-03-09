var modalBtn = document.getElementById("modal-ac");
var modal = document.querySelector(".modal");
var modalKapat = document.getElementById("modal-kapat");

modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
    modal.style.display = "none";
});