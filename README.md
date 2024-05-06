# Image Carousel

## Description

    This npm package provides a simple and easy-to-use image carousel functionality for web developers. It allows you to create image carousels with minimal setup and provides flexibility in styling.

## Installation

    You can install the package via npm by running:

    ```javascript
    npm install image-carousel
    ```

## Usage

    To use the image carousel package, follow these steps:

    1. Import the createImageList function from the package:

    ```javascript
    import createImageList from 'carousel-gallery';
    ```

    2. Call the createImageList function with the id of the container where you want the carousel to be placed, and an array of images:

    ```javascript
    const images = [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];

    createImageList('carousel-container', images);
    ```

## Parameters

    - Container ID: The id of the HTML container where the carousel will be placed.
    - Images Array: An array of objects, each containing a src attribute with the image URL and an optional alt attribute for accessibility.

## Notes

    - The provided HTML container should already have styled descendants for the carousel items. You are responsible for styling the container you provide.
    - Alt attributes for images are optional but recommended for accessibility purposes.

## Example

    ```html
    <div id="carousel-container">
    <!-- Styled carousel items will be placed here -->
    </div>

    <script type="module">
    import createImageList from 'carousel-gallery';

    const images = [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' },
        // Add more images as needed
    ];

    createImageList('carousel-container', images);
    </script>
    ```
