document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  prev.addEventListener("click", () => {
    showSlides(slideIndex -= 1);
  });

  next.addEventListener("click", () => {
    showSlides(slideIndex += 1);
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const n = parseInt(dot.dataset.slide, 10);
      showSlides(slideIndex = n);
    });
  });

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }
});