// Fetch prospects data and store it in a variable
let prospects = [];

fetch('prospects.json')
    .then(response => response.json())
    .then(data => {
        prospects = data;
        populateTable(prospects); // Populate the table on page load
    })
    .catch(error => console.error('Error fetching prospects:', error));

// Function to populate the table
function populateTable(data) {
    const prospectTable = document.querySelector('#prospect-data');
    prospectTable.innerHTML = ''; // Clear any existing rows

    data.forEach(prospect => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${prospect.url}" target="_blank">${prospect.name}</a></td>
            <td>${prospect.position}</td>
            <td>${prospect.college}</td>
        `;
        prospectTable.appendChild(row);
    });
}

// Event listener for filter dropdown (if you have one)
document.querySelector('#position-filter').addEventListener('change', event => {
    filterProspects(event.target.value);
});

// Function to filter prospects by position
function filterProspects(position) {
    const filteredData = prospects.filter(prospect => prospect.position === position || position === 'All');
    populateTable(filteredData);
}
