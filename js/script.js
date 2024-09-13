// navlink responsif
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLink = document.querySelector('.nav-links ul');

hamburgerMenu.addEventListener('click', function() {
    if(navLink.style.display === "none") {
        navLink.style.display = 'flex';
    } else {
        navLink.style.display = 'none';
    }
});