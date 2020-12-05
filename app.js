const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./route')
const app = express();
const mongoose =require('mongoose');

mongoose.connect('insert connection string here');

app.use(bodyParse.json());
app.use('/api',routes);

module.exports =app;
