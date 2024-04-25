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
    const enterButton = document.querySelector('.enter');
    let selectedKeywords = [];

    keywords.forEach(button => {
        button.addEventListener('click', function() {
            const keywordText = this.textContent.toLowerCase().trim();
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                selectedKeywords.push(keywordText);
            } else {
                selectedKeywords = selectedKeywords.filter(k => k !== keywordText);
            }

            console.log(selectedKeywords); 
        });
    });

    enterButton.addEventListener('click', function() {
        const coffeeKeywords = ['light', 'cultural', 'conversations'].sort();
        const sipKeywords = ['late-night', 'fun', 'intense'].sort();
        const phinKeywords = ['cozy', 'quick', 'conversations'].sort();
        const mudKeywords = ['dark', 'late-night', 'love'].sort();

        // Check if the selected keywords match any of the groups
        if (sortedSelection.length === 3) {
            if (compareArrays(sortedSelection, coffeeKeywords)) {
                console.log('Redirecting to coffee.html');
                window.location.href = 'coffee.html';
            } else if (compareArrays(sortedSelection, sipKeywords)) {
                console.log('Redirecting to sip.html');
                window.location.href = 'sip.html';
            } else if (compareArrays(sortedSelection, phinKeywords)) {
                console.log('Redirecting to phin.html');
                window.location.href = 'phin.html';
            } else if (compareArrays(sortedSelection, mudKeywords)) {
                console.log('Redirecting to mud.html');
                window.location.href = 'mud.html';
            } else {
                console.log('Redirecting to index.html');
                window.location.href = 'index.html';
            }
        } else {
            console.log('Not enough keywords selected');
            alert('Please select exactly three keywords.');
        }
    });
});

function compareArrays(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]);
}