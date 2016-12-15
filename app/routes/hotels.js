'use strict';

module.exports = function(app) {
    app.delete('/api/hotel/:id', function(req, res) {
        let hotels = new app.model.Hotels(),
            newHotel = req.body

        hotels.remove(req.params.id, function(err, result) {
            res.status(404).json({
                msg: 'implementation not found'
            })
        })
    })

    app.put('/api/hotel/', function(req, res) {
        let hotels = new app.model.Hotels(),
            newHotel = req.body

        hotels.update(newHotel, function(err, result) {
            res.status(404).json({
                msg: 'implementation not found'
            })
        })
    })

    app.post('/api/hotel/', function(req, res) {
        let hotels = new app.model.hotels(),
            newHotel = req.body

        hotels.insert(newHotel, function(err, result) {
            res.status(404).json({
                msg: 'implementation not found'
            })
        })
    })

    app.get('/api/hotel/:id', function(req, res) {
        let hotels = new app.model.Hotels();
        hotels.findById(req.params.id, (err, docs) => {
            res.status(404).json({
                msg: 'implementation not found'
            })
        })
    })

    app.get('/api/hotels/', function(req, res) {
        let hotels = new app.model.Hotels();

        hotels.pageList(req.params.page, req.params.qtd)
            .then(function(result){
                res.status(404).json({
                    msg: result
                });
            })
            .catch(function (err) {
                res.status(404).json({
                    msg: 'implementation not found'
                });
            });

        /*hotels.pageList(req.params.page, req.params.qtd, (err, docs) => {
            res.status(404).json({
                msg: 'implementation not found'
            })
        })*/
    })

}
