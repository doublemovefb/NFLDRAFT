async function loadProspects() {
    try {
        const response = await fetch('prospects.json');
        const prospects = await response.json();
        displayProspects(prospects);
    } catch (error) {
        console.error('Error loading prospects:', error);
    }
}

function displayProspects(prospects) {
    const prospectDataContainer = document.getElementById('prospect-data');
    prospects.forEach(player => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const nameLink = document.createElement('a');
        nameLink.href = `player_template.html?name=${encodeURIComponent(player.name)}&position=${encodeURIComponent(player.position)}&college=${encodeURIComponent(player.college)}`;
        nameLink.textContent = player.name;
        nameCell.appendChild(nameLink);

        const positionCell = document.createElement('td');
        positionCell.textContent = player.position;

        const collegeCell = document.createElement('td');
        collegeCell.textContent = player.college;

        row.appendChild(nameCell);
        row.appendChild(positionCell);
        row.appendChild(collegeCell);

        prospectDataContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', loadProspects);
