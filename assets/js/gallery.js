const imagesNames = [
  "Art_24-08-08_15-04-30-574.jpg",
  "Art_24-08-08_15-08-26-510.jpg",
  "Art_24-08-08_15-40-40-953.jpg",
  "Art_24-08-08_15-54-09-967.jpg",
  "Art_24-08-08_16-15-50-965.jpg",
  "art_24-08-08_18-12-02-632.jpg",
  "art_24-08-08_18-16-54-292.png",
  "art_24-08-08_18-27-29-748.jpg",
  "art_24-08-08_18-37-14-524.jpg",
  "art_24-08-08_18-55-09-939.jpg",
  "art_24-08-08_21-46-48-996.jpg",
  "art_24-08-08_21-51-10-117.jpg",
  "art_24-08-08_22-01-52-325.jpg",
  "art_24-08-08_22-05-39-231.jpg",
  "art_24-08-08_22-06-57-579.jpg",
  "art_24-08-08_22-11-26-626.jpg",
  "art_24-08-08_22-17-01-737.jpg",
  "art_24-08-08_22-19-41-760.jpg",
  "art_24-08-08_22-22-16-726 (1).jpg",
  "art_24-08-08_22-22-16-726.jpg",
  "art_24-08-08_22-29-02-895.jpg",
  "art_24-08-08_22-30-30-311.jpg",
  "art_24-08-08_22-35-15-296.jpg",
  "art_24-08-08_22-44-20-341.jpg",
  "art_24-08-08_22-48-38-825.jpg",
  "art_24-08-08_22-50-40-083.jpg",
  "art_24-08-08_23-52-59-815 (1).jpg",
  "art_24-08-08_23-52-59-815.jpg",
  "art_24-08-08_23-58-35-825 (1).jpg",
  "art_24-08-08_23-58-35-825.jpg",
  "art_24-08-08_23-59-19-124.jpg",
  "art_24-08-09_16-15-05-748 (1).jpg",
  "art_24-08-09_16-15-05-748.jpg",
  "art_24-08-09_16-18-20-761.jpg",
  "art_24-08-09_16-25-25-848.jpg",
  "art_24-08-09_16-29-16-720.jpg",
  "art_24-08-09_16-43-59-345.jpg",
  "art_24-08-09_16-45-21-633.jpg",
  "art_24-08-09_16-48-27-095.jpg"
]


var currentIndex = 0;
var galleryItems;
const lightbox = document.getElementById('lightbox');
const expandedImg = document.getElementById('expandedImg');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
  


// JavaScript to iterate through images in the 'batatas' folder
window.onload = function() {
    const imageGallery = document.getElementById('imageGallery');
    const imageFolderPath = 'images/residence_photos/';
    
    // Specify the number of images or dynamically load them with backend help
    const imageCount = 38; // Example: If you know there are 10 images in the folder

    // Loop through the images
    for (let i = 1; i <= imageCount; i++) {
      const img = document.createElement('img');
      img.src = `${imageFolderPath}${imagesNames[i]}`; // Assuming your images are named like image1.jpg, image2.jpg, etc.
      img.alt = imagesNames[i];
      img.className = "gallery-item"
      
      // Append each image to the gallery
      imageGallery.appendChild(img);
    }
  
  
    galleryItems = document.querySelectorAll('.gallery-item');
  
  
  // Open the lightbox and show the clicked image
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log("teste1");
    lightbox.style.display = 'block';
    currentImageIndex = index;
    showImage(currentImageIndex);
  });
});
  
  
  // Close the lightbox
closeBtn.addEventListener('click', () => {
  console.log("teste2");
  lightbox.style.display = 'none';
});
  
};
  
closeImage = () => {
  console.log("teste2");
  lightbox.style.display = 'none';
}




// Show next image
nextBtn.addEventListener('click', () => {
  console.log("teste3");
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  showImage(currentImageIndex);
});

// Show previous image
prevBtn.addEventListener('click', () => {
  console.log("teste4");
  currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage(currentImageIndex);
});

// Display the image in the lightbox
function showImage(index) {
  console.log("teste5");
  expandedImg.src = galleryItems[index].src;
}