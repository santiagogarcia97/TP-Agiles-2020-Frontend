const express = require('express');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
app.disable("x-powered-by");

const API_SERVICE_URL = 'https://agiles-backend-2020.herokuapp.com';

/* SERVE FRONTEND STATICS */
app.use(express.static(__dirname + '/dist/ahorcado'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/ahorcado/index.html'));
});

/* PROXY */
app.use('/api', createProxyMiddleware({ target: API_SERVICE_URL, changeOrigin: true, logLevel: 'debug' }));

/* SERVER START */
const puerto = process.env.PORT || 5000;
app.listen(puerto, () => {
  console.log(`Proxy corriendo en puerto: ${puerto}`)
})