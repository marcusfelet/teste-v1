'use strict';

const express = require('express'),
    app = express(),
    load = require('express-load'),
    db = require('./app/mongo/mongoConnection'),
    url = 'mongodb://localhost:27017/ttwgroup',
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
}).then('mongo').then('model').into(app)

process.db = db;

db.connect(url, function(err) {
    if (err) {
        console.log('We can\'t connect to mongo...')
        process.exit(1)
    } else {
        app.listen(process.env.PORT || 3000, function() {
            console.log('Let\'s book...')
        })
    }
})
