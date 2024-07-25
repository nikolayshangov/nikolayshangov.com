document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('maintenance-text');
    let opacity = 0;
    const fadeInInterval = 50; // interval in milliseconds
    const fadeInDuration = 2000; // total duration in milliseconds

    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn); // Stop the interval when fully visible
        } else {
            opacity += fadeInInterval / fadeInDuration;
            textElement.style.opacity = opacity;
        }
    }, fadeInInterval);
});