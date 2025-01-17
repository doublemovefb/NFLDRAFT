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
    const prospectsContainer = document.getElementById('prospects-list');
    prospects.forEach(player => {
        const playerLink = document.createElement('a');
        playerLink.href = player.url;
        playerLink.textContent = `${player.name} - ${player.position} (${player.college})`;
        prospectsContainer.appendChild(playerLink);
        prospectsContainer.appendChild(document.createElement('br'));
    });
}

document.addEventListener('DOMContentLoaded', loadProspects);
