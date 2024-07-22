// Get the container div and the reset button
const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');


for (let i = 1; i <= 900; i++) {
    // Create a new div element
    const newDiv = document.createElement('div');
    // Add text content to the new div
    newDiv.textContent = 'Div ' + i;

    // Add event listener for mouseenter to change color and keep it
    newDiv.addEventListener('mouseenter', function() {
        newDiv.classList.add('hovered');
    });

    // Append the new div to the container
    container.appendChild(newDiv);
}

// Add event listener for the reset button
resetButton.addEventListener('click', function() {
    // Get all divs within the container
    const divs = container.querySelectorAll('div');
    // Remove the 'hovered' class and add the 'transparent' class to all divs
    divs.forEach(div => {
        div.classList.remove('hovered');
        div.classList.add('transparent');
    });
});
