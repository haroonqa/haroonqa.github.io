document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel__slide');
    let currentIndex = 0;
    const slideInterval = 3000; // Time in milliseconds for each slide

    function updateCarousel() {
        const newTransform = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.carousel__slides').style.transform = newTransform;
    }

    function moveToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateCarousel();
    }

    // Event listeners for next and previous buttons
    document.querySelector('.carousel__btn--prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop to the last slide
        }
        updateCarousel();
    });

    document.querySelector('.carousel__btn--next').addEventListener('click', function() {
        moveToNextSlide();
    });

    // Set up the automatic sliding
    let autoSlide = setInterval(moveToNextSlide, slideInterval);

    // Optional: Clear interval on mouse enter and restart on mouse leave
    document.querySelector('.carousel').addEventListener('mouseenter', function() {
        clearInterval(autoSlide);
    });

    document.querySelector('.carousel').addEventListener('mouseleave', function() {
        autoSlide = setInterval(moveToNextSlide, slideInterval);
    });
});
