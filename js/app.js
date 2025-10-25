let backImg = document.querySelector('.parentImg');
let breadImg = document.getElementById('Img');
let txt = document.querySelector('.txt');
let parentTxt = document.querySelector('.parentTxt');
let sec2 = document.querySelector('.sec2');
let sec3 = document.querySelector('.sec3');
let imgs = document.querySelectorAll('.sec3 .txtSimple .fourImg img'); 
let fourImg = document.querySelector('.fourImg');
const cards = document.querySelectorAll('.card');
let sec4 = document.querySelector('.sec4')
if (!backImg || !breadImg || !txt || !sec2 || !sec3 || imgs.length === 0 || cards.length < 2) {
    console.error("خطا بده(backImg, breadImg, sec2, sec3, imgs[0], cards) ");
} else {
    imgs[0].style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'; 
    imgs[0].style.opacity = 0;
    imgs[0].style.transform = 'translateY(50px)';

    document.addEventListener('DOMContentLoaded', () => {
    

    /////در هر بار رندر کردن صفحه به سمت چپ میرفت مشکل از کروم بود اینو نوشتم محکمش کنم/////
    const sec3Element = sec3;
    if (sec3Element) {
        sec3Element.style.transform = 'translateX(0)'; 
    }

    



    window.addEventListener('scroll', () => {
        let st = parseInt(window.scrollY);
        
        let sec2Ofset = sec2.offsetTop;
        let sec3Offset = sec3 ? sec3.offsetTop : 0; 
        console.log(st);
        console.log(sec2Ofset);
        
        
        
        breadImg.classList.add('fix')
        backImg.style.transform = 'scale(' + (1 + (st / 5000)) + ')';
        breadImg.style.transform = 'translateY(100px)scale(' + (1 + (st / 10000)) + ')';
        
        if (st >= (sec2Ofset + 500)) {
            backImg.style.opacity = 0;
            txt.style.opacity = 0;
            sec2.classList.add('fix');
            cards[0].style.top = '11%';
        } else {
            backImg.style.opacity = 1;
            txt.style.opacity = 1;
            sec2.classList.remove('fix');
            cards[0].style.top = '100vh';
        }

        if (st >= (sec2Ofset + 1300)) {
            cards[1].style.top = '11%';
        } else {
            cards[1].style.top = '100vh';
        }

        if(st>=(sec2Ofset +3000)){
            sec4.classList.add('fix')
            sec4.style.opacity=1
            sec2.style.opacity=0
            breadImg.style.opacity=0
        }else{
            sec2.classList.add('fix')
            breadImg.classList.add('fix')
             sec2.style.opacity=1
             sec4.style.opacity=0
            breadImg.style.opacity=1
        }
         
        // if(st>=(sec2Ofset +2000)){
        //     sec4.style.
        // }else
        // {
        //     sec2.classList.add('fix')
        // }
        ///////hardImg  :)/////

        if (st >= (sec3Offset + 600)) { 
            imgs[0].style.opacity = 1;
            imgs[0].style.transform = 'translateY(0) rotate(3deg)'; 
        } else if (st < (sec3Offset + 800)) {
            imgs[0].style.opacity = 0;
            imgs[0].style.transform = 'translateY(50px) rotate(0deg)'; 
        }

        if (st >= (sec3Offset + 600)) { 
            imgs[1].style.opacity = 1;
            imgs[1].style.transform = 'translateY(0) rotate(-6deg)'; 
        } else if (st < (sec3Offset + 800)) {
            imgs[1].style.opacity = 0;
            imgs[1].style.transform = 'translateY(50px) rotate(0deg)'; 
        }
        
        if (st >= (sec3Offset + 600)) { 
            imgs[2].style.opacity = 1;
            imgs[2].style.transform = 'translateY(0) rotate(7deg)'; 
        } else if (st < (sec3Offset + 800)) {
            imgs[2].style.opacity = 0;
            imgs[2].style.transform = 'translateY(50px) rotate(0deg)'; 
        }

            if (st >= (sec3Offset + 600)) { 
            imgs[3].style.opacity = 1;
            imgs[3].style.transform = 'translateY(0) rotate(-10deg)'; 
        } else if (st < (sec3Offset + 800)) {
            imgs[3].style.opacity = 0;
            imgs[3].style.transform = 'translateY(50px) rotate(0deg)'; 
        }

       
        

    });
});
}

