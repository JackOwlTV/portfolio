const http = require('http');

const server = http.createServer((res, res) => {
    res.readableEnded('Voilà une réponse')
});

server.listen(process.env.PORT || 3000);