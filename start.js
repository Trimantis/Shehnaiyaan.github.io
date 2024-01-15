document.addEventListener('DOMContentLoaded', function () {
  const movingElement = document.querySelector('.moving-element');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const newPosition = scrollPosition * 2; // Adjust the multiplier for the desired speed

    movingElement.style.transform = `translateX(${newPosition}px) translateY(-50%)`;
    
  });
});

