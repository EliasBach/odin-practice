const container = document.querySelector(".image-container")
const slides = document.querySelectorAll(".slide")
let currentIndex = 0
displaySlide()

const nextBtn = document.querySelector(".next")
nextBtn.addEventListener("click", nextSlide)

const prevBtn = document.querySelector(".prev")
prevBtn.addEventListener("click", prevSlide)


function prevSlide() {
    hideSlide()
    currentIndex == 0 ? currentIndex = slides.length-1 : currentIndex-- 
    displaySlide()
}

function nextSlide() {
    hideSlide()
    currentIndex == slides.length-1 ? currentIndex = 0 : currentIndex++ 
    displaySlide()
}

function displaySlide() {
    slides[currentIndex].style.display = "inline-block"
}

function hideSlide() {
    slides[currentIndex].style.display = "none"
}
