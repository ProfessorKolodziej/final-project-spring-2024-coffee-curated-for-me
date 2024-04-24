// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

/* JavaScript for setting primary color variable */
document.documentElement.style.setProperty('--color-primary', '#');

/* JavaScript for media queries */
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        document.querySelector('.content-container').style.margin = '0 auto';
        document.querySelector('.content-container').style.maxWidth = '768px';
    } else if (window.innerWidth <= 480) {
        document.querySelector('.content-container').style.margin = '0 auto';
        document.querySelector('.content-container').style.maxWidth = '320px';
    }
});
document.getElementById('myImage').addEventListener('click', function() {
    var script = document.createElement('script');
    script.src = 'new_script.js'; // Path to the new JS file
    document.head.appendChild(script); // You can also append to document.body if preferred
});
