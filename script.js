// Automatically generated script.js
const imagesFolder = './images/';

const imageList = [
    'IMG_20240113_0002.png', '._IMG_20240113_0002.png', 'IMG_20240113_0008.png', '._IMG_20240113_0008.png', 'IMG_20240113_0009.png', '._IMG_20240113_0009.png', 'IMG_20240113_0026.png', '._IMG_20240113_0026.png', 'IMG_20240113_0030.png', '._IMG_20240113_0030.png', 'IMG_20240113_0032.png', '._IMG_20240113_0032.png', 'IMG_20240113_0033.png', '._IMG_20240113_0033.png', 'IMG_20240113_0035.png', '._IMG_20240113_0035.png', 'IMG_20240113_0044.png', '._IMG_20240113_0044.png', 'IMG_20240113_0046.png', '._IMG_20240113_0046.png', 'IMG_20240113_0047.png', '._IMG_20240113_0047.png', 'IMG_20240113_0048.png', '._IMG_20240113_0048.png', 'IMG_20240113_0070.png', '._IMG_20240113_0070.png', 'IMG_20240113_0075.png', '._IMG_20240113_0075.png', 'IMG_20240113_0079.png', '._IMG_20240113_0079.png', 'IMG_20240113_0089.png', '._IMG_20240113_0089.png', 'IMG_20240113_0103.png', '._IMG_20240113_0103.png', 'IMG_20240113_0105.png', '._IMG_20240113_0105.png', 'IMG_20240113_0114.png', '._IMG_20240113_0114.png', 'IMG_20240303_0022.png', '._IMG_20240303_0022.png', 'IMG_20240318_0004.png', '._IMG_20240318_0004.png', 'IMG_20240414_0013.png', '._IMG_20240414_0013.png', 'IMG_20240425_0009.png', '._IMG_20240425_0009.png', 'IMG_20240425_0015.png', '._IMG_20240425_0015.png', 'png_0052.png', '._png_0052.png', 'png_0069.png', '._png_0069.png', 'png_0092.png', '._png_0092.png', 'png_0100.png', '._png_0100.png', 'png_0103.png', '._png_0103.png', 'png_0105.png', '._png_0105.png', 'png_0132.png', '._png_0132.png', 'Scan 1 5.14.2024.jpeg', '._Scan 1 5.14.2024.jpeg', 'Scan 5 5.14.2024.jpeg', '._Scan 5 5.14.2024.jpeg', 'Scan 6.22.2024 10.jpeg', '._Scan 6.22.2024 10.jpeg', 'Scan 6.22.2024 28.jpeg', '._Scan 6.22.2024 28.jpeg', 'Scan 6.22.2024 34.jpg', '._Scan 6.22.2024 34.jpg', 'Scan 6.22.2024 39.jpg', '._Scan 6.22.2024 39.jpg', 'Scan 6.22.2024 40.jpg', '._Scan 6.22.2024 40.jpg', 'Scan 6.22.2024 44.jpeg', '._Scan 6.22.2024 44.jpeg', 'Scan 07.09.2024 3.jpeg', '._Scan 07.09.2024 3.jpeg', 'Scan 08.10.2024 9.jpeg', '._Scan 08.10.2024 9.jpeg', 'Scan 08.10.2024 12.jpeg', '._Scan 08.10.2024 12.jpeg', 'Scan 08.10.2024 20.jpeg', '._Scan 08.10.2024 20.jpeg', 'Scan 08.10.2024 27.jpeg', '._Scan 08.10.2024 27.jpeg', 'Scan 09.02.2024 5.jpeg', '._Scan 09.02.2024 5.jpeg', 'Scan 09.02.2024 9.jpeg', '._Scan 09.02.2024 9.jpeg', 'Scan 11.02.2024 9.jpeg', '._Scan 11.02.2024 9.jpeg', 'Scan 11.02.2024 15.jpeg', '._Scan 11.02.2024 15.jpeg', 'Scan 11.02.2024 22.jpeg', '._Scan 11.02.2024 22.jpeg', 'zine_002-003.jpg'
];

// Function to get a random image from the list
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imagesFolder + imageList[randomIndex];
}

// Initial image setup
const imageElement = document.getElementById('image-display');
imageElement.src = getRandomImage();

// Event listener for the button
document.getElementById('change-button').addEventListener('click', () => {
    imageElement.src = getRandomImage();
});
