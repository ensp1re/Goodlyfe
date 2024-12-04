document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".header__nav-menu");
    const slides = document.querySelectorAll(".hero__slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dots = document.querySelector(".hero__slider-dots");

    let currentSlide = 0;
    let slideInterval;

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(index);
            resetSlideInterval();
        });
        dots.appendChild(dot);
    });

    function goToSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === n);
        });
        Array.from(dots.children).forEach((dot, index) => {
            dot.classList.toggle("active", index === n);
        });
        currentSlide = n;
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetSlideInterval();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetSlideInterval();
    });

    setTimeout(() => {
        goToSlide(0);
        startSlideInterval();
    }, 0);
});
