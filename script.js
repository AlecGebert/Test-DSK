let images = [
  {
    url: "./images/img-1.png",
  },
  {
    url: "./images/img-2.png",
  },
  {
    url: "./images/img-3.png",
  },
  {
    url: "./images/img-1.png",
  },
  {
    url: "./images/img-2.png",
  },
  {
    url: "./images/img-3.png",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider-frame");
  let sliderDots = document.querySelector(".slider-dots");

  initImages();

  initDots();

  initAutoplay();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="item n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider-dots_item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-dots_item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});

let counterSpan = document.querySelector(".counter-span");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");

let counter = 0;

updateDisplay();

incrementBtn.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

function updateDisplay() {
  counterSpan.innerHTML = counter;
}
