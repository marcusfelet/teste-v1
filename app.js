'use strict';

const express = require('express'),
    app = express(),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    compression = require('compression')

app.use(compression());

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './public');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

load('routes', {
        cwd: 'app'
    })
    .then('config')
    .then('mongo')
    .then('model')
    .into(app);

console.log(app.model);
console.log(app.config);
/*
db.connect(app.config.getDbURL(), function(err) {
    if (err) {
        console.log('We can\'t connect to mongo...')
        process.exit(1)
    } else {
        app.listen(process.env.PORT || 3000, function() {
            console.log('Let\'s book...')
        })
    }
});*/

module.exports = app;
