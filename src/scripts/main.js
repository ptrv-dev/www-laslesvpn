console.log("JavaScript is working!");

const burger = document.querySelector(".nav-burger"),
    actions = document.querySelector(".actions"),
    nav = document.querySelector(".nav");

burger.addEventListener("click", function (e) {
    e.preventDefault(false);
    if (burger.classList.contains("nav-burger_active")) {
        burger.classList.remove("nav-burger_active");
        actions.classList.remove("actions_active");
        nav.classList.remove("nav_active");
    } else {
        burger.classList.add("nav-burger_active");
        actions.classList.add("actions_active");
        nav.classList.add("nav_active");
    }
});

const container = document.querySelector(".container");

console.log(container.style.width);

if (container.offsetWidth <= 768) {
    nav.appendChild(actions);
}

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

const signup = document.getElementById("signup-btn");
const body = document.querySelector("body");
const modal = document.getElementById("signup-modal");
const modalClose = document.querySelector(".modal__close");

signup.addEventListener("click", (e) => {
    e.preventDefault(false);
    if (modal.classList.contains("modal_visibility")) {
        modal.classList.remove("modal_visibility");
        body.classList.remove("body_noscroll");
    } else {
        body.classList.add("body_noscroll");
        modal.classList.add("modal_visibility");
        burger.classList.remove("nav-burger_active");
        actions.classList.remove("actions_active");
        nav.classList.remove("nav_active");
    }
});

modalClose.addEventListener("click", (e) => {
    e.preventDefault(false);
    if (modal.classList.contains("modal_visibility")) {
        modal.classList.remove("modal_visibility");
        body.classList.remove("body_noscroll");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        if (modal.classList.contains("modal_visibility")) {
            modal.classList.remove("modal_visibility");
            body.classList.remove("body_noscroll");
        }
    }
});
