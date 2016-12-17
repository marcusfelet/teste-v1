angular.module('app')
    .service('HotelService', hotelService);

hotelService.$inject = ['RequestService', 'URLAPI'];

function hotelService(RequestService, URLAPI) {
  var service = {
      create: create,
      update: update,
      remove: remove,
      getAll: getAll,
      getById: getById
  };
  return service;

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

    /*return $http({
        url: '/api/hotel',
        method: 'PUT',
        params: {}
    });*/
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

  function getById(id) {
    return RequestService.request(
      'GET',
      URLAPI.GETHOTELID + id,
      {}
      );
  };
};
