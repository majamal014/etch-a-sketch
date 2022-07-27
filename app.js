for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
    }

    document.querySelector('.container').appendChild(row);
}

document.querySelectorAll('.col').forEach(div => {
    div.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'red';
    });
});