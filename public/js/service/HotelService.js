angular.module('app')
    .service('HotelService', hotelService);

hotelService.$inject = ['RequestService', 'URLAPI'];

function hotelService(RequestService, URLAPI) {
  var service = {
      create: create,
      update: update,
      remove: remove,
      getAll: getAll,
      getById: getById,
      validate: validate,
      getRand: getRand
  };
  return service;

  function result(pcampo, pmessage) {
    return {
      campo: pcampo,
      message: pmessage
    };
  };

  function isNumber(pnum) {
    return (!isNaN(parseFloat(pnum)) && isFinite(pnum));
  };

  function validate(hotel) {
    return new Promise(function (resolve, reject) {
      var lstResult = [];
      if (!hotel.hotel)
        lstResult.push(result('hotel', 'Campo Hotel é obrigatório'));
      if (!hotel.resort)
        lstResult.push(result('resort', 'Campo Resort é obrigatório'));
      if (!hotel.latitude)
        lstResult.push(result('latitude', 'Campo Latitude é obrigatório'));
      else {
        if (!isNumber(hotel.latitude))
          lstResult.push(result('latitude', 'Campo Latitude somente permite números'));
      }
      if (!hotel.longitude)
        lstResult.push(result('longitude', 'Campo Longitude é obrigatório'));
      else {
        if (!isNumber(hotel.longitude))
          lstResult.push(result('longitude', 'Campo Longitude somente permite números'));
      }
      if (!hotel.stars)
        lstResult.push(result('stars', 'Campo Estrelas é obrigatório'));
      else {
        if (!isNumber(hotel.stars))
          lstResult.push(result('stars', 'Campo Estrelas somente permite números'));
        else {
          if ((hotel.stars < 1) || (hotel.stars > 5))
            lstResult.push(result('stars', 'Campo Estrelas somente permite números entre 1 e 5'));
        }
      }
      if (!hotel.tags)
        lstResult.push(result('tags', 'Campo Tags é obrigatório'));
      if (!hotel.description.overview)
        lstResult.push(result('overview', 'Campo Visão geral é obrigatório'));
      if (!hotel.description.about)
        lstResult.push(result('about', 'Campo Sobre é obrigatório'));
      if (!hotel.description.rooms)
        lstResult.push(result('rooms', 'Campo Quartos é obrigatório'));
      if (!hotel.description.amenities)
        lstResult.push(result('amenities', 'Campo Cortesias é obrigatório'));

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

  function create(hotel) {
    return RequestService.request(
      'POST',
      URLAPI.POSTHOTEL,
      hotel
      );
  };

  function update(hotel) {
    return RequestService.request(
      'PUT',
      URLAPI.PUTHOTEL,
      hotel
      );
  };

  function remove(id) {
    return RequestService.request(
      'DELETE',
      URLAPI.DELETEHOTEL + id,
      {}
      );
  };

  function getAll() {
    return RequestService.request(
      'GET',
      URLAPI.GETHOTEL,
      {}
      );
  };

  function getRand() {
    return RequestService.request(
      'GET',
      URLAPI.GETHOTELRAND,
      {}
      );
  };

  function getById(id) {
    return RequestService.request(
      'GET',
      URLAPI.GETHOTELID + id,
      {}
      );
  };
};
