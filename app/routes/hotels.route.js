'use strict';

const hotelModel = require('../model/hotels.model');

module.exports = function(app) {
    app.delete('/api/hotel/:id', function(req, res) {
        let param = req.params.id || '-1';

        hotelModel.validate(param, {}, 'DELETE')
           .then(function (result) {
             return hotelModel.remove(param);
           })
          .then(function(result) {
            res.status(200).json({
                msg: result
            });
          })
          .catch(function(err) {
            res.status(400).json({
                msg: err
            });
          });
    });

    app.put('/api/hotel/', function(req, res) {

      let _id = req.body.id;
      let description = req.body.description || {};
      let newHoteldescription = {
        overview: description.overview || '',
        about: description.about || '',
        rooms: description.rooms || '',
        amenities: description.amenities || '',
      };

      let newHotel = {
        hotel: req.body.hotel || '',
        resort: req.body.hotel || '',
        latitude: req.body.latitude || '',
        longitude: req.body.longitude || '',
        stars: req.body.stars || '',
        tags: req.body.tags || [],
        description: newHoteldescription
      };

      hotelModel.validate(_id, newHotel, 'UPDATE')
         .then(function (result) {
           return hotelModel.update(_id, newHotel);
         })
        .then(function(result) {
          res.status(200).json({
            msg: result
          });
        })
        .catch(function(err) {
          res.status(400).json({
            msg: err
          });
        });
    });

    app.post('/api/hotel/', function(req, res) {
      let description = req.body.description || {};
      let newHoteldescription = {
        overview: description.overview || '',
        about: description.about || '',
        rooms: description.rooms || '',
        amenities: description.amenities || '',
      };

      let newHotel = {
        hotel: req.body.hotel || '',
        resort: req.body.hotel || '',
        latitude: req.body.latitude || '',
        longitude: req.body.longitude || '',
        stars: req.body.stars || '',
        tags: req.body.tags || [],
        description: newHoteldescription
      };

      hotelModel.validate('', newHotel, 'NEW')
        .then(function (result) {
          return hotelModel.insert(newHotel);
        })
        .then(function(result) {
          res.status(200).json({
              msg: result
          });
        })
        .catch(function(err) {
          res.status(400).json({
              msg: err
          });
        });
    });

    app.get('/api/hotel/:id', function(req, res) {
        let param = req.params.id || '-1';

        hotelModel.validate(param, {}, 'SELECT')
           .then(function (result) {
             return hotelModel.findById(param);
           })
          .then(function (doc) {
            res.status(200).json({
                msg: doc
            });
          })
          .catch(function (err) {
              res.status(404).json({
                  msg: err
              });
          });
    });

    app.get('/api/hotels/', function(req, res) {
        hotelModel.pageList()
            .then(function(result){
                res.status(200).json({
                    msg: result
                });
            })
            .catch(function (err) {
                res.status(404).json({
                    msg: err
                });
            });
    });

}
