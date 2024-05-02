import createImageList from './image.js';

const images = [
  {
    id: 1,
    src: 'https://rb.gy/2e14r6',
    alt: 'Man in yellow jacket and black pants riding on black skateboard during daytime.',
  },
  {
    id: 2,
    src: 'https://rb.gy/q1ur7w',
    alt: 'Photography of person playing snowboarding during daytime.',
  },
  {
    id: 3,
    src: 'https://rb.gy/lazqia',
    alt: 'Man in blue jacket and yellow pants wearing black helmet jumping on snow-covered mountain.',
  },
];

// Call create image list with the id of the container, and array of images
createImageList('snowboarding-photos-section', images);
