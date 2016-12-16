'use strict';

const hotel = require('./hotels.schema');

module.exports = {
  remove: remove,
  update: update,
  insert: insert,
  findById: findById,
  pageList: pageList
};

//remove hotel
function remove(id) {
  return hotel.collection.findByIdAndRemove(id).exec();
};

//update hotel
function update(pid, pHotel) {
  let query = {
    _id: hotel.getObjectId(pid)
  };
  let options = {
    upsert: false,
    new: true
  };
  return hotel.collection
    .findOneAndUpdate(query, pHotel, options)
    .exec();
};

//insert hotel
function insert(photel) {
  return new hotel.collection(photel)
  .save();
}

//find hotel by id
function findById(id) {
  return hotel.collection.findById(hotel.getObjectId(id)).exec();
}

//list all hotels
function pageList(page, qtd) {
    return hotel.collection.find({}).exec();
}
