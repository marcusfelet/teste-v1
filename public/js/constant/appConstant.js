(function (angular) {
  angular.module('app')
    .constant('URLAPI', {
      'GETHOTEL': '/api/hotels/',
      'GETHOTELID': '/api/hotel/',
      'GETHOTELRAND': '/api/hotels/grid',
      'POSTHOTEL': '/api/hotel/',
      'PUTHOTEL': '/api/hotel/',
      'DELETEHOTEL': '/api/hotel/'
    })
}(angular));