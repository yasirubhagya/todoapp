const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./route')
const app = express();
const mongoose =require('mongoose');

// insert connection string here
mongoose.connect('mongodb://localhost/todoapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParse.json());
app.use('/api', routes);

module.exports = app;
