const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
    console.log(`request was made: ${req.url}`);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/contact.html`).pipe(res);
    } else if (req.url === '/api/ninjas') {
        const ninjas = [{name: 'Ryu', age: 29}, {name: 'Yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/404.html`).pipe(res);
    }
});
// Listen for server
server.listen(3000, 'localhost');
console.log('listening on port 3000');

