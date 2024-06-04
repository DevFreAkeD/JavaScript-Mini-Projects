function rollDice() {
    const diceImages = [
        'assets/dice-1.png',
        'assets/dice-2.png',
        'assets/dice-3.png',
        'assets/dice-4.png',
        'assets/dice-5.png',
        'assets/dice-6.png'
    ];
    const img = document.getElementById('img');
    let rollCount = 0;
    img.classList.add('rotate');
    const rollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * 6);
        img.src = diceImages[randomIndex];
        rollCount++;
        if (rollCount >= 12) { // Number of rolls
            clearInterval(rollInterval);
            img.classList.remove('rotate');
            // Show final result
            const finalIndex = Math.floor(Math.random() * 6);
            img.src = diceImages[finalIndex];
        }
    }, 100); // Speed of animation
}
