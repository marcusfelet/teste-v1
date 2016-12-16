(function (angular) {
  angular.module('app')
    .constant('URLAPI', {
      'GETHOTEL': '/api/hotels/',
      'GETHOTELID': '/api/hotel/',
      'POSTHOTEL': '/api/hotel/',
      'PUTHOTEL': '/api/hotel/',
      'DELETEHOTEL': '/api/hotel/'
    })
}(angular));