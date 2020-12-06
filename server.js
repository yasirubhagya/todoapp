const http = require('http');
const app = require('./app');
const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(`API is available on http://localhost:${PORT}/api`);
});
