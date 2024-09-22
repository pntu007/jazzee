const express = require('express');
const app = express();

const producerRouter = require('./routes/producerRoutes');

app.use('api/v1/producer',producerRouter);

module.exports = app;