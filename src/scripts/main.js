console.log("JavaScript is working!");

const slides = document.querySelectorAll(".slider-item"),
    dots = document.querySelectorAll(".slider-nav__dot"),
    prev = document.getElementsByClassName("slider-nav__btn_prev")[0],
    next = document.getElementsByClassName("slider-nav__btn_next")[0];

let index = 0;

const setCurrentSlide = (n) => {
    slides.forEach((element) => {
        element.classList.remove("slider-item_active");
        element.style.cssText = `transition: all .3s ease; transform: translateX(calc(-${n}00% - ${
            n * 50
        }px));`;
    });
    dots.forEach((element) => {
        element.classList.remove("slider-nav__dot_active");
    });
    slides[n].classList.add("slider-item_active");
    dots[n].classList.add("slider-nav__dot_active");
};

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setCurrentSlide(index);
};

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    setCurrentSlide(index);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
dots.forEach((element, i) => {
    element.addEventListener("click", () => {
        index = i;
        setCurrentSlide(index);
    });
});
slides.forEach((element, i) => {
    element.addEventListener("click", () => {
        index = i;
        setCurrentSlide(index);
    });
});

setCurrentSlide(index);