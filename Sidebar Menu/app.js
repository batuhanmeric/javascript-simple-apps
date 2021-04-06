const burgerdiv = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");
const menuoptions = document.querySelectorAll("ul a");

burgerdiv.addEventListener("click", () => {
    sidebar.classList.toggle("sidebarwidth");
    burgerdiv.classList.toggle("burgerdivposition");

    menuoptions.forEach((item, index) => {
        if(!item.style.animation) {
            item.style.animation = `menuslide 0.5s ease forwards ${index / 7}s`;
        } else {
            item.style.animation = "";
        }
    });
});
