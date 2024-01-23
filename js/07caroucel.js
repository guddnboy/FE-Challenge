const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const imgs = document.querySelector('.imgs');
let cnt = 0;

prevBtn.addEventListener('click', prev());
nextBtn.addEventListener('click', next());

function next(){
    if (cnt === 3){
        cnt = 0;
        imgs.style.transfrom = `translate3d(0, 0, 0)`;
    }
    else{
        cnt += 1;
        imgs.style.transfrom = `translate3d(-${370 * cnt}px, 0, 0)`;
    }
}

function prev(){
    if (cnt === -1){
        cnt = 2;
        imgs.style.transfrom = `translate3d(-${370 * cnt}px, 0, 0)`;
    }
    else{
        cnt -= 1;
        imgs.style.transfrom = `translate3d(-${370 * cnt}px, 0, 0)`;
    }
}