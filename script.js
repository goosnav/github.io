// Automatically generated script.js
const imagesFolder = './images/';

const imageList = [
    'file_1.jpg', 'file_10.jpeg', 'file_11.jpeg', 'file_12.png', 'file_13.jpeg', 'file_14.jpeg', 'file_15.jpg', 'file_16.jpg', 'file_17.jpg', 'file_18.jpeg', 'file_19.jpeg', 'file_2.jpeg', 'file_20.jpeg', 'file_21.jpeg', 'file_22.png', 'file_23.png', 'file_24.png', 'file_25.png', 'file_26.png', 'file_27.png', 'file_28.png', 'file_29.png', 'file_3.jpeg', 'file_30.png', 'file_31.png', 'file_32.png', 'file_33.png', 'file_34.png', 'file_35.png', 'file_36.png', 'file_37.png', 'file_38.png', 'file_39.png', 'file_4.jpeg', 'file_40.png', 'file_41.png', 'file_42.png', 'file_43.png', 'file_44.png', 'file_45.png', 'file_46.png', 'file_47.png', 'file_48.png', 'file_49.png', 'file_5.jpeg', 'file_50.png', 'file_6.jpeg', 'file_7.png', 'file_8.jpeg', 'file_9.jpeg'
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
