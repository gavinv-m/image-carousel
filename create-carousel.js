export default function createCarouselElements(
  arrayOfImages,
  containerToAddImages
) {
  // Create buttons and images container
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel');

  const previousBtn = document.createElement('button');
  previousBtn.classList.add('carousel-button');
  previousBtn.classList.add('prev');
  carouselContainer.appendChild(previousBtn);

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('carousel-button');
  nextBtn.classList.add('next');
  carouselContainer.appendChild(nextBtn);

  const listContainer = document.createElement('ul');
  arrayOfImages.forEach((image) => {
    const imageContainer = document.createElement('li');
    imageContainer.classList.add('slide');

    const img = document.createElement('img');
    img.setAttribute('src', image.src);
    img.setAttribute('alt', image.alt);

    // Append image to li, and li to ul
    imageContainer.appendChild(img);
    listContainer.appendChild(imageContainer);
  });

  // Append list to carousel
  carouselContainer.appendChild(listContainer);

  // Append to html section
  document.getElementById(containerToAddImages).appendChild(carouselContainer);
  return;
}
