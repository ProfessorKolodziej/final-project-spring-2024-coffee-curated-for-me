// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// For the Keywords Page
document.addEventListener("DOMContentLoaded", () => {
    const keywords = document.querySelectorAll('.keyword');
    const MAX_ACTIVE_KEYWORDS = 3;
    let activeKeywords = [];

    keywords.forEach(button => {
        button.addEventListener('click', function() {
            const isActive = button.classList.contains('active');
            
            // If the button is already active and it's clicked, deactivate it
            if (isActive) {
                button.classList.remove('active');
                activeKeywords = activeKeywords.filter(activeButton => activeButton !== button);
                return;
            }
            
            // If the button is not active, activate it if we have less than 3 active keywords
            if (activeKeywords.length < MAX_ACTIVE_KEYWORDS) {
                button.classList.add('active');
                activeKeywords.push(button);
            } else {
                // If we already have 3 active keywords, deactivate the oldest one and activate the clicked one
                const buttonToDeactivate = activeKeywords.shift();
                buttonToDeactivate.classList.remove('active');
                button.classList.add('active');
                activeKeywords.push(button);
            }
        });
    });
});
