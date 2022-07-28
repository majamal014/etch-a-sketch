const grid = document.querySelector('.grid');

function renderGrid(numSquares) {
    grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
    
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            if (square.style.backgroundColor == '') {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
        
        grid.appendChild(square);
    }
}

renderGrid(16);

document.querySelector('button').addEventListener('click', () => {
    let size = parseInt(prompt("Enter number of squares per side."));
    while (size > 64) {
        size = parseInt(prompt("Maximum number is 64. Enter again."));
    }
    grid.innerHTML = '';
    renderGrid(size);
});