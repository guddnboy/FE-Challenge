const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const imgs = document.querySelector('.imgs');
let cnt = 0;


setInterval(next, 2000);

prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);

function prev(){
    if (cnt === 0){
        cnt= 2;
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }

    else{
        cnt -= 1;
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }
}

function next(){
    if (cnt === 2){
        cnt = 0;
        imgs.style.transform = `translateX(0)`;
    }
    
    else{
        cnt += 1;
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }
}