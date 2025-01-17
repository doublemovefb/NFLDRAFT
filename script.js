// Event listener for filter dropdown (if you have one)
document.querySelector('#position-filter').addEventListener('change', event => {
    filterProspects(event.target.value);
});

// Full prospects data
fetch('prospects.json')
    .then(response => response.json())
    .then(prospects => {
        const customBoardData = document.getElementById('custom-board-data');
        const prospectData = document.getElementById('prospect-data');

        prospects.forEach(prospect => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const positionCell = document.createElement('td');
            const collegeCell = document.createElement('td');

            nameCell.textContent = prospect.name;
            positionCell.textContent = prospect.position;
            collegeCell.textContent = prospect.college;

            row.appendChild(nameCell);
            row.appendChild(positionCell);
            row.appendChild(collegeCell);

            // Add the row to both tables
            customBoardData.appendChild(row.cloneNode(true));
            prospectData.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching prospects:', error));

// Function to populate the table
function populateTable(data) {
    const prospectTable = document.querySelector('#prospect-data');
    prospectTable.innerHTML = ''; // Clear any existing rows

    data.forEach(prospect => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${prospect.name}</td>
            <td>${prospect.position}</td>
            <td>${prospect.college}</td>
        `;
        prospectTable.appendChild(row);
    });
}

// Populate the table on page load
fetch('prospects.json')
    .then(response => response.json())
    .then(prospects => {
        populateTable(prospects);
    })
    .catch(error => console.error('Error fetching prospects:', error));
