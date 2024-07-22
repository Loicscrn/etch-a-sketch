const container = document.getElementById('container');
const resetButton = document.getElementById('resetbtn');
const chaserButton = document.getElementById('chaser');
const evaderButton = document.getElementById('evader');
const eraserButton = document.getElementById('eraser');
const gridSize = 30; // Define the grid size (30x30)

let currentClass = 'hovered-red'; // Default hover color

function createGrid() {
    // Clear any existing content in the container
    container.innerHTML = '';

    // Calculate the size of each cell to ensure the grid is a square
    const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;
    const cellSize = containerSize / gridSize;
    container.style.width = container.style.height = `${containerSize}px`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        // Create a new div element
        const newDiv = document.createElement('div');
        // Add class for styling
        newDiv.classList.add('cell');
        // Set the size of the cell
        newDiv.style.width = newDiv.style.height = `${cellSize}px`;

        // Add click event listener to toggle active state
        newDiv.addEventListener('click', function() {
            newDiv.classList.toggle('active');
        });
        
        // Add event listener for mouseenter to change color and keep it
        newDiv.addEventListener('mouseenter', function() {
            newDiv.classList.add(currentClass);
        });

        // Add event listener for mouse click to act as eraser
        newDiv.addEventListener('click', function() {
            if (currentClass === 'hovered') {
                newDiv.className = 'cell';
            }
        });

        // Append the new div to the container
        container.appendChild(newDiv);
    }
}

// Add event listener for the reset button
resetButton.addEventListener('click', function() {
    // Get all divs within the container
    const divs = container.querySelectorAll('.cell');
    // Remove all hover classes from all divs
    divs.forEach(div => {
        div.className = 'cell';
    });
});

// Add event listeners for color change buttons
chaserButton.addEventListener('click', function() {
    currentClass = 'hovered-blue';
});

evaderButton.addEventListener('click', function() {
    currentClass = 'hovered-red';
});

// Add event listener for the eraser button
eraserButton.addEventListener('click', function() {
    currentClass = 'hovered';
});

// Initial call to create the grid
createGrid();

// Recreate the grid on window resize to maintain the square shape
window.addEventListener('resize', createGrid);