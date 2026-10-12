const openM = document.getElementById("openM");
const closeM = document.getElementById("closeM");
const bkg = document.getElementById("background");

function openMenu() {
    openM.style.display = "none";
    closeM.classList.add("open");
    bkg.classList.add("active");
}

function closeMenu () {
    openM.style.display = "block";
    closeM.classList.remove("open");
    bkg.classList.remove("active");
}