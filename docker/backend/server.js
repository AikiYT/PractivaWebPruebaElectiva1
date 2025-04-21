
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const promClient = require('prom-client');

app.use(morgan('dev'));
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/', (req, res) => res.send('Backend en funcionamiento'));
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

app.listen(PORT, () => console.log('Servidor corriendo en puerto', PORT));
