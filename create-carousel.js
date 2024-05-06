import initializeButtons from './carousel-movement.js';

// Exports to image.js
export default function createCarouselElements(
  arrayOfImages,
  containerToAddImages
) {
  // Check if array not empty
  if (arrayOfImages.length < 1) return;

  // Create buttons and images container
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel');

  const previousBtn = document.createElement('button');
  previousBtn.innerHTML = '&#8592;';
  previousBtn.classList.add('carousel-button');
  previousBtn.classList.add('prev');
  carouselContainer.appendChild(previousBtn);

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#8594;';
  nextBtn.classList.add('carousel-button');
  nextBtn.classList.add('next');
  carouselContainer.appendChild(nextBtn);

  const listContainer = document.createElement('ul');
  arrayOfImages.forEach((image, index) => {
    const imageContainer = document.createElement('li');
    imageContainer.classList.add('slide');

    if (index === 0) imageContainer.classList.add('active');

    const img = document.createElement('img');

    img.setAttribute('src', image.src);

    if (typeof image.alt === 'string') {
      img.setAttribute('alt', image.alt);
    }

    // Append image to li, and li to ul
    imageContainer.appendChild(img);
    listContainer.appendChild(imageContainer);
  });

  // Append list to carousel
  carouselContainer.appendChild(listContainer);

  // Append to html section
  document.getElementById(containerToAddImages).appendChild(carouselContainer);

  initializeButtons();
  return;
}
