const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const pictures = mainSlide.querySelectorAll('div');
const container = document.querySelector('.container');
const height = container.clientHeight;
let activeSlide = 0;
sidebar.style.top = `-${(pictures.length - 1) * 100}vh`;
upButton.addEventListener("click", () => {
    changeSlide('up');
    mainSlide.style.transform = `translateY(-${activeSlide*height}px)`;
    sidebar.style.transform = `translateY(${activeSlide*height}px)`;
});
downButton.addEventListener("click", () => {
    changeSlide('down');
    mainSlide.style.transform = `translateY(-${activeSlide*height}px)`;
    sidebar.style.transform = `translateY(${activeSlide*height}px)`;
});

function changeSlide(direction) {
    switch (direction) {
        case "up":
            activeSlide++;
            break;
        case "down":
            activeSlide--;
            break;
        default:
            return activeSlide;
    }
    if (activeSlide >= pictures.length) {
        activeSlide = 0;
        return
    }
    if (activeSlide < 0) {
        activeSlide = pictures.length - 1;
        return
    }


}
