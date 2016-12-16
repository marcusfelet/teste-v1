'use strict';

const express = require('express'),
    app = express(),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    compression = require('compression');

app.use(compression());

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './public');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
load('config', {
        cwd: 'app'
    })
    .then('mongo')
    .then('routes')
    .into(app);

module.exports = app;
