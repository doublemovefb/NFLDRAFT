<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFL Draft Database</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation Header -->
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

    <!-- Prospects Table Section -->
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

    <!-- Link to External JavaScript File -->
    <script src="script.js"></script>
</body>
</html>
