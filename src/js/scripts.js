// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Keyword interactions and navigates to specific pages based on selected keywords.
document.addEventListener("DOMContentLoaded", function() {
    const keywords = document.querySelectorAll('.keyword');
    const enterButton = document.querySelector('.enter');
    const selectedColor = '#755B5B'; 
    const specialKeywords = ['light', 'cultural', 'conversations']; 
    let selectedSpecialKeyword = null;
    let selectedKeywords = []; 

    // Event listener for each keyword button
    keywords.forEach(button => {
        button.addEventListener('click', function() {
            const keywordText = this.textContent.toLowerCase(); // Normalize case for comparison
            const isActive = this.classList.toggle('active'); // Toggle the 'active' class
            
            // Change background color based on active state
            this.style.backgroundColor = isActive ? selectedColor : '';

            // Check if the keyword is one of the special keywords
            if (isActive && specialKeywords.includes(keywordText)) {
                selectedSpecialKeyword = keywordText; // Track the special keyword
            } else if (!isActive && selectedSpecialKeyword === keywordText) {
                selectedSpecialKeyword = null; // Deselect the special keyword
            }

            // Update the general selected keywords array
            if (isActive) {
                selectedKeywords.push(keywordText);
            } else {
                selectedKeywords = selectedKeywords.filter(k => k !== keywordText);
            }
        });
    });

    // Event listener for the ENTER button
    enterButton.addEventListener('click', function() {
        const requiredKeywords = ['light', 'cultural', 'conversations']; // Required keywords for navigation
        const isValidSelection = requiredKeywords.every(k => selectedKeywords.includes(k));

        // Check if all required keywords are selected
        if (isValidSelection) {
            window.location.href = 'coffee.html'; // Redirect to coffee.html if valid
        } else if (selectedSpecialKeyword) {
            window.location.href = `coffee.html`; // Redirect to next-page.html if a special keyword is selected
        }
    });
});

enterButton.addEventListener('click', function() {
    const requiredKeywords = ['light', 'cultural', 'conversations'].sort();
    const currentSelection = selectedKeywords.sort();

    if (JSON.stringify(currentSelection) === JSON.stringify(requiredKeywords)) {
        // Store the keywords in local storage before redirecting
        localStorage.setItem('selectedKeywords', JSON.stringify(selectedKeywords));
        window.location.href = 'coffee.html'; // Ensure this path is correct
    }
});
