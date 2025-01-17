// Filter prospects by position
function filterProspects(position) {
    const filteredData = prospects.filter(prospect => prospect.position === position || position === 'All');
    populateTable(filteredData);
}

// Event listener for filter dropdown (if you have one)
document.querySelector('#position-filter').addEventListener('change', event => {
    filterProspects(event.target.value);
});
// Full prospects data
const prospects = [
    { name: "Travis Hunter", position: "Cornerback" },
    { name: "Will Johnson", position: "Cornerback" },
    { name: "Maxwell Hairston", position: "Cornerback" },
    { name: "Shavon Revel Jr.", position: "Cornerback" },
    { name: "Benjamin Morrison", position: "Cornerback" },
    { name: "Jahdae Barron", position: "Cornerback" },
    { name: "Trey Amos", position: "Cornerback" },
    { name: "Davison Igbinosun", position: "Cornerback" },
    { name: "Denzel Burke", position: "Cornerback" },
    { name: "Jermari Harris", position: "Cornerback" },
    { name: "Zy Alexander", position: "Cornerback" },
    { name: "Kenneth Grant", position: "Defensive Line" },
    { name: "Tyleik Williams", position: "Defensive Line" },
    { name: "Deone Walker", position: "Defensive Line" },
    { name: "Nazir Stackhouse", position: "Defensive Line" },
    { name: "Mason Graham", position: "Defensive Line" },
    { name: "Derrick Harmon", position: "Defensive Line" },
    { name: "Walter Nolen", position: "Defensive Line" },
    { name: "Alfred Collins", position: "Defensive Line" },
    { name: "Shemar Turner", position: "Defensive Line" },
    { name: "Omarr Norman-Lott", position: "Defensive Line" },
    { name: "Howard Cross III", position: "Defensive Line" },
    { name: "Nic Scourton", position: "Defensive Line" },
    { name: "Landon Jackson", position: "Defensive Line" },
    { name: "Jordan Burch", position: "Defensive Line" },
    { name: "Abdul Carter", position: "Edge" },
    { name: "James Pearce Jr.", position: "Edge" },
    { name: "Mykel Williams", position: "Edge" },
    { name: "J.T. Tuimoloau", position: "Edge" },
    { name: "Shemar Stewart", position: "Edge" },
    { name: "Mike Green", position: "Edge" },
    { name: "Kyle Kennard", position: "Edge" },
    { name: "Princely Umanmielen", position: "Edge" },
    { name: "Bradyn Swinson", position: "Edge" },
    { name: "Dani Dennis-Sutton", position: "Edge" },
    { name: "Jack Sawyer", position: "Edge" },
    { name: "Antwaun Powell-Ryland", position: "Edge" }
];

// Function to populate the table
function populateTable(data) {
    const prospectTable = document.querySelector('#prospect-data');
    prospectTable.innerHTML = ''; // Clear any existing rows

    data.forEach(prospect => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${prospect.name}</td>
            <td>${prospect.position}</td>
        `;
        prospectTable.appendChild(row);
    });
}

// Populate the table on page load
populateTable(prospects);
