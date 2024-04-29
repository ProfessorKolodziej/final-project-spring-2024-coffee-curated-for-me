// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
 document.addEventListener('DOMContentLoaded', function() {
    const keywords = document.querySelectorAll('.keyword');
    const enterButton = document.querySelector('.enter');
    let selectedKeywords = [];

    // Toggle keyword active state and manage the selection array
    keywords.forEach(button => {
        button.addEventListener('click', function() {
            const keywordText = this.textContent.toLowerCase().trim();

            if (this.classList.contains('active')) {
                // If already active, deactivate and remove from the array
                this.classList.remove('active');
                selectedKeywords = selectedKeywords.filter(k => k !== keywordText);
            } else {
                // Activate and add to the array only if less than three are already selected
                if (selectedKeywords.length < 3) {
                    this.classList.add('active');
                    selectedKeywords.push(keywordText);
                } else {
                    // Optionally alert the user that no more than three can be selected
                    alert('You can only select three keywords at a time. Please deselect one before adding another.');
                }
            }

            console.log(selectedKeywords); // For debugging: log current state of selectedKeywords
        });
    });

    enterButton.addEventListener('click', function() {
        // Define the keyword sets for redirection
        const redirections = [
            { keywords: ['light', 'cultural', 'conversations'], url: 'coffee.html' },
            { keywords: ['late-night', 'fun', 'intense'], url: 'sip.html' },
            { keywords: ['cozy', 'quick', 'conversations'], url: 'phin.html' },
            { keywords: ['dark', 'late-night', 'love'], url: 'mud.html' },
            { keywords: ['intense', 'conversations', 'quick'], url: 'bitter.html' },
            { keywords: ['friendly', 'light', 'cultural'], url: 'post.html' },
            { keywords: ['dark', 'cultural', 'friendly'], url: 'davelle.html' },
            { keywords: ['light', 'friendly', 'cute'], url: 'post.html' },
            { keywords: ['study', 'cute', 'cozy'], url: 'bro.html' },
            { keywords: ['cute', 'friendly', 'cultural'], url: 'miso.html' },
            { keywords: ['quick', 'cozy', 'intense'], url: 'ppl.html' }
        ];

        let redirectionMade = false;
        redirections.forEach(function(redirection) {
            if (performRedirection(redirection.keywords.sort(), redirection.url)) {
                redirectionMade = true;
            }
        });

        if (!redirectionMade) {
            alert('Try again please :)');
        }
    });

    function performRedirection(requiredKeywords, redirectUrl) {
        const sortedSelection = [...selectedKeywords].sort();
        if (sortedSelection.length === requiredKeywords.length && sortedSelection.every((value, index) => value === requiredKeywords[index])) {
            window.location.href = redirectUrl;
            return true;
        }
        return false;
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.home-button').addEventListener('click', function() {
            window.location.href = 'index.html'; 
        });
    
        const selectedKeywords = JSON.parse(localStorage.getItem('selectedKeywords')) || [];
        console.log('Selected Keywords:', selectedKeywords);
    });

