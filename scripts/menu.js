let hamburgerBtn = document.querySelector(".hamburger-btn-mobile");
let mobileNav = document.querySelector(".lower-navbar");
let icon = document.querySelector(".hamburger-btn-mobile i")

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})