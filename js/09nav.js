document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menuBtn');
    var sideMenu = document.querySelector('.side-menu');

    menuBtn.addEventListener('click', function () {
        // 토글하여 side-menu 표시 또는 숨김
        sideMenu.classList.toggle('show-side-menu');
    });
});