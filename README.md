# Name Ethnicity Analysis Application

## Description
This web application allows users to enter a name, and then it uses the NamSor API to call the user a funny name XD. It's a simple demonstration of integrating an external API with a Node.js server and updating the DOM with JavaScript.

## Features
- Input field for entering a name.
- Integration with the NamSor API for ethnicity analysis.
- Dynamic display of the predicted ethnicity or nationality.

## Installation
To get this application up and running, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Darkkid819/name-analysis
2. **Navigate to the project Directory**
   ```sh
   cd name-analysis
3. **Install Dependencies**
   ```sh
   npm install express axios dotenv
3. **Environment Setup**
   - Create a .env file in the project root.
   - Add "NAMSOR_API_KEY=your_namsor_api_key" in the .env file
4. **Start the Server**
   ```sh
   node server.js

## Usage
Once the server is running, you can use the application as follows:

1. Open your web browser and go to `http://localhost:3000`.
2. Enter a name into the text field.
3. Click the "Submit" button.
4. profit lmao.

## Technologies Used
- Node.js
- Express.js
- Axios for API calls
- HTML/CSS for frontend
- NamSor API for name analysis