'use strict';

const hotelModel = require('../model/hotels.model');

module.exports = function(app) {
    app.delete('/api/hotel/:id', function(req, res) {
        let param = req.params.id || '-1';

        hotelModel.remove(req.params.id)
          .then(function(result) {
            res.status(200).json({
                msg: result
            });
          })
          .catch(function(err) {
            res.status(400).json({
                msg: err.message
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

      hotelModel.update(_id, newHotel)
        .then(function(result) {
          res.status(200).json({
            msg: result
          });
        })
        .catch(function(err) {
          res.status(400).json({
            msg: err.message
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

      hotelModel.insert(newHotel)
        .then(function(result) {
          res.status(200).json({
              msg: result
          });
        })
        .catch(function(err) {
          res.status(400).json({
              msg: err.message
          });
        });
    });

    app.get('/api/hotel/:id', function(req, res) {
        let param = req.params.id || '-1';
        hotelModel.findById(param)
          .then(function (doc) {
            res.status(200).json({
                msg: doc
            });
          })
          .catch(function (err) {
              res.status(404).json({
                  msg: 'implementation not found'
              });
          });
    });

    app.get('/api/hotels/', function(req, res) {
        hotelModel.pageList(req.params.page, req.params.qtd)
            .then(function(result){
                res.status(200).json({
                    msg: result
                });
            })
            .catch(function (err) {
                res.status(404).json({
                    msg: 'implementation not found'
                });
            });
    });

}
