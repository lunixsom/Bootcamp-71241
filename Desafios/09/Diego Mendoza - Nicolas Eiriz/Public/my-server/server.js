const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    const routes = {
        '/index': 'public/index.html',
        '/about': 'public/about.html',
        '/contact': 'public/contact.html',
    };

    if (routes[req.url]) {
        const filePath = path.join(__dirname, routes[req.url]);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url !== '/') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    } else {
        res.writeHead(301, { 'Location': '/index' });
        res.end();
    }
});


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
