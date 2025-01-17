console.log("NFL Draft Database loaded!");
fetch('prospects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(prospect => {
            console.log(`${prospect.name} - ${prospect.position}`);
        });
    })
    .catch(error => console.error("Error loading prospects:", error));
