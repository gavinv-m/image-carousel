import createCarouselElements from './create-carousel.js';

// Exports to image.js
export default class CarouselHandler {
  constructor(listOfImages) {
    this.listOfImages = listOfImages;
  }

  renderCarousel(containerToAddImages) {
    createCarouselElements(this.listOfImages, containerToAddImages);
  }
}
