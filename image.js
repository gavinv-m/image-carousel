import CarouselHandler from './carousel-handler.js';

const filterInvalidSrc = function filterInvalidSrcAttributes(arr) {
  return arr.filter((image) => typeof image.src === 'string');
};

export default function createImageList(containerToAddImages, arrayOfImages) {
  const imagesArray = filterInvalidSrc(arrayOfImages);

  const carousel = new CarouselHandler(imagesArray);
  carousel.renderCarousel(containerToAddImages);

  return;
}
