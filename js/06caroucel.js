var nextBtn = document.querySelector('#nextBtn');
var prevBtn = document.querySelector('#prevBtn');
var content_list = document.querySelector('.content-list'); 
let index = 0;

prevBtn.addEventListener('click', () => {
    if (index === 0) return;
    index -= 1;
    content_list.style.transform = `translate3d(-${400 * index}px, 0, 0)`; 
});

nextBtn.addEventListener('click', () => {
    if (index === 2) return;
    index += 1;
    content_list.style.transform = `translate3d(-${400 * index}px, 0, 0)`;
});
