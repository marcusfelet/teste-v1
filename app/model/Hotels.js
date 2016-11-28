'use strict';

function Hotels() {
    this._hotels = process.db.get().collection('hotels')
    this._ObjectID = process.db.ObjectID()
}

Hotels.prototype.remove = function(id, cb) {
    //remove hotel
    cb()
}

Hotels.prototype.update = function(hotel, cb) {
    //update hotel
    cb()
}

Hotels.prototype.insert = function(hotel, cb) {
    //insert hotel
    cb()
}

Hotels.prototype.findById = function(id, cb) {
    //find hotel by id
    cb()
}

Hotels.prototype.pageList = function(page, qtd, cb) {
    //list all hotels
    cb()
}

module.exports = function() {
    return Hotels
}
