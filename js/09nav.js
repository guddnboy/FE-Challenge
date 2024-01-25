document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menuBtn');
    var navMenu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
    });
});