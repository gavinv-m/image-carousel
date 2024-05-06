export default function initializeButtons() {
  const buttons = document.querySelectorAll('.carousel-button');
  const slides = document.querySelectorAll('.slide');
  const numberOfSlides = slides.length;
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');

  // Hide previous button on first load
  prevBtn.style.visibility = 'hidden';

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Retrieve clicked button
      const offset = button.classList.contains('next') ? 1 : -1;

      // Retrieve 'active' photo index number
      let currentIndexActive = Array.prototype.findIndex.call(
        slides,
        (element) => element.classList.contains('active')
      );

      // Remove class active
      slides[currentIndexActive].classList.remove('active');

      // Add class to offset element
      slides[currentIndexActive + offset].classList.add('active');

      // Update current index
      currentIndexActive += offset;

      // Remove prev or next button
      if (currentIndexActive === 0) {
        prevBtn.style.visibility = 'hidden';
      } else if (currentIndexActive === numberOfSlides - 1) {
        nextBtn.style.visibility = 'hidden';
      } else {
        prevBtn.style.visibility = 'visible';
        nextBtn.style.visibility = 'visible';
      }
    });
  });
}
