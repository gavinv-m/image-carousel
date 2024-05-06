import initializeCarouselElements from './create-carousel.js';

// Exports to image.js
export default class CarouselHandler {
  constructor(listOfImages) {
    this.listOfImages = listOfImages;
  }

  renderCarousel(containerToAddImages) {
    initializeCarouselElements(this.listOfImages, containerToAddImages);
  }
}
