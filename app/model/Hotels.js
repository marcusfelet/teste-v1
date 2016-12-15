'use strict';

function Hotels() {
    this._hotels = process.db.get().collection('hotels')
    this._ObjectID = process.db.ObjectID()
}

Hotels.prototype.remove = function(id) {
    
    //remove hotel
}

Hotels.prototype.update = function(hotel) {
    //update hotel
}

Hotels.prototype.insert = function(hotel) {
    //insert hotel
}

Hotels.prototype.findById = function(id) {
    //find hotel by id
}

Hotels.prototype.pageList = function(page, qtd) {
    //list all hotels
    return new Promise(function (resolve, reject) {
        console.log('Hotels._hotels');
        let hotelsCollection = process.db.get().collection('hotels');
        console.log(hotelsCollection);


        let obj = {
            db: process.db,
            a: Hotels || 'z'
        }
        resolve(obj);
    });
}

module.exports = function() {
    return Hotels
}
