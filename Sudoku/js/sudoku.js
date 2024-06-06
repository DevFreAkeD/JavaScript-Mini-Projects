// Function to generate an empty Sudoku grid
function generateEmptySudokuGrid() {
    return Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0)); // Initialize empty grid
}

// Function to display the Sudoku grid on the webpage
function displaySudokuGrid(grid) {
    const sudokuGrid = document.getElementById("sudoku-grid");
    sudokuGrid.innerHTML = ""; // Clear previous content
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = grid[i][j] || ''; // Set cell value (if non-zero)
            sudokuGrid.appendChild(cell);
        }
    }
}

// Generate an empty Sudoku grid and display it on the webpage by default
const emptySudokuGrid = generateEmptySudokuGrid();
displaySudokuGrid(emptySudokuGrid);
