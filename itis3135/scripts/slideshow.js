$(document).ready(function() {
    const images = [
        { src: 'images/helicopter.jpeg', caption: 'H - Helicopter'},
        { src: 'images/audir8.png', caption: 'A - Audi R8' },
        { src: 'images/racecar.png', caption: 'R - Race Car' },
        { src: 'images/orangutan.png', caption: 'O - Orangutan' },
        { src: 'images/orange.png', caption: 'O - Orange' },
        { src: 'images/gtr.png', caption: 'N - Nissan GTR' },
        { src: 'images/quokka.png', caption: 'Q - Quokka' },
        { src: 'images/astonmartin.png', caption: 'A - Aston Martin' },
        { src: 'images/dinosaur.png', caption: 'D - Dinosaur' },
        { src: 'images/rollsroyce.png', caption: 'R - Rolls Royce' },
        { src: 'images/iceberg.png', caption: 'I - Iceberg' }
    ];

    let currentIndex = 0;

    function displayImage(index) {
        const image = images[index];
        $('#slideshow-container').html(`<img src="${image.src}" alt="${image.caption}" style="width:100%"><div>${image.caption}</div>`);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        displayImage(currentIndex);
    }

    images.forEach((img, index) => {
        $('#image-list').append(`<li onclick="displayImage(${index})">${img.caption}</li>`);
    });

    displayImage(0); // Display the first image initially

    // Optional: Set an interval for auto-changing images
    setInterval(nextImage, 3000);
});



