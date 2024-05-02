import CarouselHandler from './carousel-handler.js';

export default function createImageList(containerToAddImages, arrayOfImages) {
  const carousel = new CarouselHandler(arrayOfImages);
  carousel.renderCarousel(containerToAddImages);

  return;
}
