const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    service: 'MarsGamme',
    message: 'Hello from MarsGamme!',
    version: '1.0.0'
  }));
});

server.listen(PORT, () => {
  console.log(`MarsGamme running on port ${PORT}`);
});
