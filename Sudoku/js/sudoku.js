// Function to generate an empty Sudoku grid
function generateEmptySudokuGrid() {
    return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
}

// Function to display the Sudoku grid on the webpage
function displaySudokuGrid(grid) {
    const sudokuGrid = document.getElementById("sudoku-grid");
    sudokuGrid.innerHTML = ""; // Clear previous content
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.contentEditable = grid[i][j] === 0 ? "true" : "false";
            cell.textContent = grid[i][j] === 0 ? '' : grid[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("input", handleInput);
            sudokuGrid.appendChild(cell);
        }
    }
}

// Handle user input in the grid cells
function handleInput(event) {
    const cell = event.target;
    const value = parseInt(cell.textContent, 10);
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (isNaN(value) || value < 1 || value > 9) {
        cell.textContent = '';
    } else {
        gameState.grid[row][col] = value;
        gameState.moves++;
        document.getElementById("moves-counter").textContent = `Moves: ${gameState.moves}`;
        checkWinCondition();
    }
}

// Function to generate a valid Sudoku puzzle based on difficulty
function generateSudokuPuzzle(difficulty) {
    const puzzle = generateEmptySudokuGrid();

    // Fill the grid with random valid numbers based on difficulty
    const numCellsToFill = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 20 : 10;
    for (let i = 0; i < numCellsToFill; i++) {
        let row, col, num;
        do {
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);
            num = Math.floor(Math.random() * 9) + 1;
        } while (puzzle[row][col] !== 0 || !isValidPlacement(puzzle, row, col, num));
        puzzle[row][col] = num;
    }

    return puzzle;
}

// Function to check if placing a number is valid
function isValidPlacement(grid, row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num) return false;
    }
    // Check column
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] === num) return false;
    }
    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j] === num) return false;
        }
    }
    return true;
}

// Check if the Sudoku puzzle is solved correctly
function checkWinCondition() {
    // Simple win condition check: no zeros in the grid
    const isSolved = gameState.grid.every(row => row.every(cell => cell !== 0));
    if (isSolved) {
        alert('Congratulations! You solved the puzzle!');
    }
}

// Start the game
function startGame() {
    const level = document.getElementById("level-select").value;
    const puzzle = generateSudokuPuzzle(level);
    gameState.grid = puzzle;
    gameState.moves = 0;
    document.getElementById("moves-counter").textContent = `Moves: 0`;
    displaySudokuGrid(puzzle);
}

// Game state
const gameState = {
    grid: generateEmptySudokuGrid(),
    moves: 0
};

// Event listener for the start button
document.getElementById("start-btn").addEventListener("click", startGame);

// Display an empty grid by default
displaySudokuGrid(gameState.grid);
