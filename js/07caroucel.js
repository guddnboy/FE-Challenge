const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const imgs = document.querySelector('.imgs');
let cnt = 0;

prevBtn.addEventListener('click', ()=>{
    if (cnt === 0){
        cnt= 2;
        console.log(`${cnt}`, `translateX(-${370 * cnt}px)`);
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }

    else{
        console.log(`${cnt}`, `translateX(-${370 * cnt}px)`);
        cnt -= 1;
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }

});

nextBtn.addEventListener('click', ()=>{
    if (cnt === 2){
        console.log(`${cnt}`, `translateX(-${370 * cnt}px)`);
        cnt = 0;
        imgs.style.transform = `translateX(0)`;
    }
    else{
        cnt += 1;
        console.log(`${cnt}`, `translateX(-${370 * cnt}px)`);
        imgs.style.transform = `translateX(-${370 * cnt}px)`;
    }
});