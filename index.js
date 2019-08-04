const express = require('express');
const path = require('path');

const server = express();

// Serve static files from the React app
server.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
server.get('/api/', (req, res) => {

    const response = 'hello';

    res.json(response);


});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`Server listening on ${port}`);