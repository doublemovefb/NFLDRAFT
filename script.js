document.querySelector('#prospect-data').addEventListener('click', event => {
    if (event.target.tagName === 'TD') {
        const row = event.target.parentElement;
        const playerName = row.children[0].textContent;
        const playerPosition = row.children[1].textContent;
        const playerCollege = row.children[2].textContent;
        const playerRating = row.children[3].textContent;

        const boardList = document.querySelector('#big-board-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${playerName} - ${playerPosition}, ${playerCollege} (Rating: ${playerRating})`;
        boardList.appendChild(listItem);
    }
});
