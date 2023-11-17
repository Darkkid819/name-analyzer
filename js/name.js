function displayName() {
    var name = document.getElementById('nameInput').value;
    fetch('/analyze-name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const namesMap = {
            "Europe": ["cracker", "honkey", "gringo", "mayo monkey", "colonizer"],
            "Africa": ["nigger", "moon cricket", "porch monkey", "monkey", "jiggaboo"],
            "Latin America and the Caribbean": ["beaner", "wet back", "spic", "latinx"],
            "Northern America": ["cracker", "honkey", "gringo", "mayo monkey", "colonizer"],
            "Asia": ["chink", "zipperhead", "gook"],
            "Oceania": ["cracker", "honkey", "gringo", "mayo monkey", "colonizer"],
            "Unclassified": ["NIGGER!!!!!!!"]
        };

        // Select a random name from the relevant region
        const regionNames = namesMap[data.ethnicity] || namesMap["Unclassified"];
        const randomName = regionNames[Math.floor(Math.random() * regionNames.length)];

        document.body.innerHTML = '<h1>You are a ' + randomName + '</h1>';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.body.innerHTML = '<h1>Error: ' + error.message + '</h1>';
    });
}
