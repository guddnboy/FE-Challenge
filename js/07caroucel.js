var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

var imgs = document.querySelector('.imgs');
var cnt = 0;

prevBtn.addEventListener('click', ()=>{
    if (cnt === 0) return;
    else{
        cnt -= 1;
        imgs.style.transfrom = `translateX(-${400 * cnt}px)`;
    }
});

nextBtn.addEventListener('click', ()=>{
    if (cnt === 2) return;
    else{
        cnt += 1;
        imgs.style.transfrom = `translateX(-${400 * cnt}px)`;
    }
});
