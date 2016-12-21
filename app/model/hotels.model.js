'use strict';

const hotel = require('./hotels.schema');

module.exports = {
  remove: remove,
  update: update,
  insert: insert,
  findById: findById,
  pageList: pageList,
  validate: validate
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
};

//find hotel by id
function findById(id) {
  return hotel.collection.findById(hotel.getObjectId(id)).exec();
};

//list all hotels
function pageList() {
    return hotel.collection.find({}).exec();
};

function result(pcampo, pmessage) {
  return {
    campo: pcampo,
    message: pmessage
  };
};

function validate(id, photel, pstatus) {
  return new Promise(function (resolve, reject) {
    let lstResult = [];
    if (pstatus === 'UPDATE' ||
        pstatus === 'DELETE' ||
        pstatus === 'SELECT') {

      if ((!id) || (id === '-1')) {
        lstResult.push(result('id', 'Campo Id é obrigatório'));
      }
    }

    if ((pstatus === 'UPDATE') ||
        (pstatus === 'NEW')) {
      if (!photel.hotel)
        lstResult.push(result('hotel', 'Campo Hotel é obrigatório'));
      if (!photel.resort)
        lstResult.push(result('resort', 'Campo Resort é obrigatório'));
      if (!photel.latitude)
        lstResult.push(result('latitude', 'Campo Latitude é obrigatório'));
      if (!photel.longitude)
        lstResult.push(result('longitude', 'Campo Longitude é obrigatório'));
      if (!photel.stars)
        lstResult.push(result('stars', 'Campo Estrelas é obrigatório'));
      if (!photel.tags)
        lstResult.push(result('tags', 'Campo Tags é obrigatório'));
      if (!photel.description.overview)
        lstResult.push(result('overview', 'Campo Visão geral é obrigatório'));
      if (!photel.description.about)
        lstResult.push(result('about', 'Campo Sobre é obrigatório'));
      if (!photel.description.rooms)
        lstResult.push(result('rooms', 'Campo Quartos é obrigatório'));
      if (!photel.description.amenities)
        lstResult.push(result('amenities', 'Campo Cortesias é obrigatório'));
    }

    if (lstResult.length) {
      reject({
        status: false,
        messages: lstResult
      });
    }
    else {
      resolve({
        status: true,
        messages: 'ok'
      })
    }
  });
};