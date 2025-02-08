// Get the button element
const button = document.getElementById('backhandButton');

// Add event listeners for hover effects
button.addEventListener('mouseenter', () => {
    // Add the 'backhand' class when hovering over the button
    button.classList.add('backhand');
});

button.addEventListener('animationend', () => {
    // Remove the 'backhand' class after the animation ends
    button.classList.remove('backhand');
});
