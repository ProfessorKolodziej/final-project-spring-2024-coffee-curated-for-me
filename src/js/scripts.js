// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Keyword interactions and navigates to specific pages based on selected keywords.
document.addEventListener('DOMContentLoaded', function() {
    const keywords = document.querySelectorAll('.keyword');
    const coffeeButton = document.querySelector('.enter');
    const homeButton = document.querySelector('.home-button'); // Assuming this is another button meant for another action
    let selectedKeywords = [];

    // Toggle keyword active state and update the selection array
    keywords.forEach(button => {
        button.addEventListener('click', function() {
            const keywordText = this.textContent.toLowerCase().trim();
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                selectedKeywords.push(keywordText);
            } else {
                selectedKeywords = selectedKeywords.filter(k => k !== keywordText);
            }
        });
    });

    // Event listener for entering the coffee related page
    coffeeButton.addEventListener('click', function() {
        performRedirection(['light', 'cultural', 'conversations'], 'coffee.html');
        performRedirection(['late-night', 'fun', 'intense'], 'sip.html');
        performRedirection(['cozy', 'quick', 'conversations'], 'phin.html');
        performRedirection(['dark', 'late-night', 'love'], 'mud.html');
        performRedirection(['intense', 'conversations', 'quick'], 'bitter.html');
        performRedirection(['friendly', 'light', 'cultural'], 'post.html');
    });

    function performRedirection(requiredKeywords, redirectUrl) {
        const sortedSelection = [...selectedKeywords].sort();
        requiredKeywords.sort();

        if (sortedSelection.length === requiredKeywords.length && sortedSelection.every((value, index) => value === requiredKeywords[index])) {
            console.log('Redirecting to ' + redirectUrl);
            window.location.href = redirectUrl;
        }
    }
});