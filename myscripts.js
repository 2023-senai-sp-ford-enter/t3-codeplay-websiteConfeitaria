document.addEventListener("DOMContentLoaded", function(event) {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselItems = Array.from(carouselInner.querySelectorAll(".carousel-item"));
  const prevButton = carousel.querySelector(".carousel-control.prev");
  const nextButton = carousel.querySelector(".carousel-control.next");
  
  let currentIndex = -2;
  const itemWidth = carouselItems[0].offsetWidth;
  const itemsPerSlide = Math.floor(carousel.offsetWidth / itemWidth);
  const totalSlides = Math.ceil(carouselItems.length / itemsPerSlide);
  const slidesToScroll = itemsPerSlide;
  
  let autoSlide = null;
  const slideDelay = 2000; // Defina aqui o tempo de espera (em milissegundos) entre cada rolagem automática
  
  function startAutoSlide() {
    autoSlide = setInterval(function() {
      currentIndex = (currentIndex === totalSlides - 2) ? 0 : currentIndex + 1;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth * slidesToScroll}px)`;
    }, slideDelay);
    
  }
  
  function stopAutoSlide() {
    const slideDelay=2000;
    clearInterval(autoSlide);
  }
  
  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth * slidesToScroll}px)`;
    stopAutoSlide();
    startAutoSlide();
  });
  
  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth * slidesToScroll}px)`;
    stopAutoSlide();
    startAutoSlide();
  });

  startAutoSlide();
});