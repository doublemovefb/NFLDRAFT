<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFL Draft Database</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Add the navigation header here -->
    <header>
        <nav>
            <ul style="display: flex; list-style: none; background-color: #007bff; padding: 10px; margin: 0;">
                <li style="margin-right: 20px;">
                    <a href="#custom-board" style="color: white; text-decoration: none; font-size: 18px;">Your Big Board</a>
                </li>
                <li>
                    <a href="#prospect-list" style="color: white; text-decoration: none; font-size: 18px;">Scout Prospects</a>
                </li>
            </ul>
        </nav>
    </header>

   // Fetch and display prospects in a table
fetch('prospects.json')
    .then(response => response.json())
    .then(data => {
        const prospectTable = document.querySelector('#prospect-data');
        data.forEach(prospect => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${prospect.name}</td>
                <td>${prospect.position}</td>
                <td>${prospect.college}</td>
                <td>${prospect.rating}</td>
            `;
            prospectTable.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading prospects:", error));
    <section id="prospect-list">
        <h2>Top Prospects</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>College</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody id="prospect-data">
                <!-- Players will be added dynamically here -->
            </tbody>
        </table>
    </section>
</body>
</html>

});
