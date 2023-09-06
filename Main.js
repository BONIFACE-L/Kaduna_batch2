// JavaScript for the image slideshow
const slideshowImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];
  
  let currentImageIndex = 0;
  const slideshowImage = document.getElementById("slideshowImage");
  
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowImage.src = slideshowImages[currentImageIndex];
  }
  
  // Start the slideshow
  setInterval(changeImage, 3000); // Change image every 3 seconds
  