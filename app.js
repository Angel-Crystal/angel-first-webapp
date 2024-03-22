// app.js

// Require necessary modules
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for the homepage
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello, World!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
