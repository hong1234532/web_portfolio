function ToggleMenu() {
    const icon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");
    icon.classList.toggle("open");
    menu.classList.toggle("open");
}