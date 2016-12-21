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

        /*db.ttwgroup.save(
        {
            "hotel": "Hotel Aspen",
            "resort": "Aspen",
            "latitude": 6.62,
            "longitude": -89.0,
            "stars": 4,
            "tags": ["hotel", "aspen", "usa"],
            "description": {
                "overview": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "rooms": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "amenities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        });*/
        
        app.listen(process.env.PORT || 3000, function() {
            console.log('Let\'s book...')
        })
    }
})
