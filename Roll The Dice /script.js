function rollDice() {
    const diceImages = [
        'assets/dice-1.png',
        'assets/dice-2.png',
        'assets/dice-3.png',
        'assets/dice-4.png',
        'assets/dice-5.png',
        'assets/dice-6.png'
    ];
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const isTwoDice = document.getElementById('diceToggle').checked;

    img1.classList.add('rotate');
    if (isTwoDice) img2.classList.add('rotate');

    let rollCount = 0;
    const rollInterval = setInterval(() => {
        const randomIndex1 = Math.floor(Math.random() * 6);
        img1.src = diceImages[randomIndex1];

        if (isTwoDice) {
            const randomIndex2 = Math.floor(Math.random() * 6);
            img2.src = diceImages[randomIndex2];
        }

        rollCount++;
        if (rollCount >= 10) { // Number of rolls
            clearInterval(rollInterval);
            img1.classList.remove('rotate');
            if (isTwoDice) img2.classList.remove('rotate');
            // Show final result
            const finalIndex1 = Math.floor(Math.random() * 6);
            img1.src = diceImages[finalIndex1];
            if (isTwoDice) {
                const finalIndex2 = Math.floor(Math.random() * 6);
                img2.src = diceImages[finalIndex2];
            }
            rollCount = 0;
        }
    }, 100); // Speed of animation
}

function toggleDice() {
    const img2 = document.getElementById('img2');
    const isTwoDice = document.getElementById('diceToggle').checked;
    if (isTwoDice) {
        img2.classList.remove('hidden');
    } else {
        img2.classList.add('hidden');
    }
}

// Toggle button animation
document.getElementById('diceToggle').addEventListener('change', function() {
    const dot = document.querySelector('.dot');
    if (this.checked) {
        dot.style.transform = 'translateX(28px)';
    } else {
        dot.style.transform = 'translateX(0px)';
    }
});
