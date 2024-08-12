const imgs = document.querySelectorAll(".simg");
const slides = document.querySelectorAll(".slide");
const blocks = document.querySelectorAll(".sblock");
const counter = document.querySelector(".counter");
let currentIndex = 0;

function nextSlide() {
    slides.forEach(block => block.classList.add("invisible"));
    if (currentIndex >= imgs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    slides[currentIndex].classList.remove("invisible");
    imgs[currentIndex].classList.remove("invisible");
    blocks[currentIndex].classList.remove("invisible");

    counter.textContent = `${currentIndex + 1}/10`;
    
}

function prevSlide() {
    slides.forEach(block => block.classList.add("invisible"));
    if (currentIndex <= 0) {
        currentIndex = imgs.length - 1;
    } else {
        currentIndex--;
    }
    slides[currentIndex].classList.remove("invisible");

    counter.textContent = `${currentIndex + 1}/10`;
    
}




const humBtn = document.querySelector(".hum_btn");
const bg = document.querySelector(".white-bg");
const hiddenMenu = document.querySelector(".hidden");

humBtn.addEventListener('click', () => {
    const isOpen = humBtn.getAttribute('aria-expanded');
    if(isOpen==="false"){
        humBtn.setAttribute('aria-expanded', 'true');
        bg.classList.add('white-bg-expended');
        document.body.style.overflow = 'hidden';
        hiddenMenu.classList.remove('invisible');
    }else{
        humBtn.setAttribute('aria-expanded', 'false');
        bg.classList.remove('white-bg-expended');
        document.body.style.overflow = '';
        hiddenMenu.classList.add('closing');
        hiddenSearch.classList.add('closing');

        setTimeout(() => {
            hiddenMenu.classList.remove('closing');
            hiddenSearch.classList.remove('closing');

            hiddenMenu.classList.add('invisible');
            hiddenSearch.classList.add('invisible');
        }, 300); 
    }
})


const searchBtn = document.querySelector('.search');
const hiddenSearch = document.querySelector('.hidden-search');
searchBtn.addEventListener('click', () => {
    hiddenMenu.classList.add('invisible');
    hiddenSearch.classList.remove('invisible');
})

