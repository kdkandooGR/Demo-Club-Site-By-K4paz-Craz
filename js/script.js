

window.onload = function() {
    const spinner = document.querySelector('.loadingspinner');
    spinner.classList.add('fade-out');
    setTimeout(() => {
        spinner.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 500); 
    const welcomeHeader = document.querySelector('header h1');  
    const aboutSection = document.getElementById('about');
};