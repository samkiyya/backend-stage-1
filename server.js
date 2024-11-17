const http = require('http');

// Define the server port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the default response type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Handle routes
    if (req.url === '/name' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Samuel Aberra'); // Respond with full name
    } else if (req.url === '/hobby' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ hobby: 'Programming' })); // Respond with hobby in JSON
    } else if (req.url === '/dream' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('My dream is to become a successful full-stack developer and make a positive impact on the world.'); // Motivational message
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' })); // Respond with 404 for unknown routes
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
