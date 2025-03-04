require('dotenv').config();
console.log("Database Name:", process.env.DB_NAME);

// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON request bodies

// Define a test route
app.get('/', (req, res) => {
    res.send('posYtion Server is Running 🚀');
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.get('/api/test', (req, res) => {
    res.json({ message: "API is working!" });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
