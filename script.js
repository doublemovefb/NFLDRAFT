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
        nameLink.addEventListener('click', function(event) {
            event.preventDefault();
            loadPlayerTemplate(player);
        });
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

function loadPlayerTemplate(player) {
    // Fetch the player template HTML
    fetch('player_template.html')
        .then(response => response.text())
        .then(template => {
            // Replace placeholders with player data
            template = template.replace(/{{name}}/g, player.name)
                               .replace(/{{position}}/g, player.position)
                               .replace(/{{college}}/g, player.college)
                               .replace(/{{scouting_report}}/g, player.scouting_report || "No scouting report available.");

            const positions = ['Quarterback', 'RunningBack', 'WideReceiver', 'OffensiveTackle', 'InteriorOffensiveLineman', 'Edge', 'Cornerback', 'Linebacker', 'DefensiveInterior', 'Safety'];
            positions.forEach(position => {
                const isPosition = player.position.toLowerCase() === position.toLowerCase();
                template = template.replace(new RegExp(`{{#if is${position}}}`, 'g'), isPosition ? '' : '<!--')
                                   .replace(new RegExp(`{{/if}}`, 'g'), isPosition ? '' : '-->');
            });

            // Display the player template in a new section or overlay
            const playerProfileContainer = document.createElement('div');
            playerProfileContainer.innerHTML = template;
            document.body.appendChild(playerProfileContainer);
        })
        .catch(error => console.error('Error loading player template:', error));
}

document.addEventListener('DOMContentLoaded', loadProspects);
