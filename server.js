require('dotenv').config(); 
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/analyze-name', async (req, res) => {
    const firstName = req.body.name;
    const apiKey = process.env.NAMSOR_API_KEY; // replace with api key in .env
    const url = `https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch`;

    try {
        const payload = {
            personalNames: [{ id: "1", firstName: firstName }]
        };
        
        const response = await axios.post(url, payload, { headers: { "X-API-KEY": apiKey } });
        console.log(response.data)
        
        if (response.status !== 200) {
            throw new Error(response.data.message || 'Non-200 response');
        }

        res.json({ ethnicity: response.data.personalNames[0].regionOrigin });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing the request: ' + error.message);
    }
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});