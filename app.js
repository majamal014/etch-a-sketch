function renderGrid(numSquares) {
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
    
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.style.border = '2px solid black';
        square.style.margin = '-1px';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });

        grid.appendChild(square);
    }
}

renderGrid(32);
