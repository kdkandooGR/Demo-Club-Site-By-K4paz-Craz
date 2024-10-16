// This is the JavaScript code for the website

console.log("Welcome to the Coding Club!");
// When the content is loaded
window.onload = function() {
    const spinner = document.querySelector('.loadingspinner');
    spinner.classList.add('fade-out'); // Add transitioning effect
    setTimeout(() => {
        spinner.style.display = 'none'; // Hide spinner after fade-out animation
        document.body.style.overflow = 'auto'; // Allow scrolling after loading
    }, 500); // Adjust time to match CSS transition
    const welcomeHeader = document.querySelector('header h1');  // Your welcome header
    const aboutSection = document.getElementById('about');
};