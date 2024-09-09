const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Improved CORS Configuration
app.use(cors({
    origin: 'https://13-century.com', // Replace with your React frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
}));

app.use(express.json()); // For parsing application/json

// Create a pool to manage MySQL connections
const pool = mysql.createPool({
    host: 'srv1673.hstgr.io',
    user: 'u541514633_nikhiltk',
    password: 'Nktk9889',
    database: 'u541514633_century_produc',
    connectionLimit: 10, // Number of connections to pool
    connectTimeout: 10000,
    port: 3306,
});

// Dynamic route to fetch data based on category and gender
app.get('/products', (req, res) => {
    const { category, gender } = req.query; // Read category and gender from query parameters

    if (!category || !gender) {
        return res.status(400).json({ error: 'Category and gender are required' });
    }

    const query = `
        SELECT 
            p.id, 
            p.product_number AS model_number, 
            p.category, 
            p.gender, 
            v.color, 
            v.image_filename 
        FROM Products p 
        LEFT JOIN Variants v ON p.id = v.product_id 
        WHERE p.category = ? AND p.gender = ?
    `;

    pool.query(query, [category, gender], (err, results) => {
        if (err) {
            console.error(`Error fetching data for ${category}/${gender}:`, err);
            res.status(500).json({ error: `Failed to fetch data for ${category}/${gender}` });
        } else {
            res.json(results);
        }
    });
});

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes and serve the React application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on https://13-century.com`);
});
