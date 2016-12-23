(function (angular) {
  angular.module('app')
    .service('RequestService', requestService);

  requestService.$inject = ['$http'];

  function requestService($http) {
    return {
      request: request
    };

    function request(method, url, data) {
      return $http({
        method: method,
        url: url,
        data: data
      })
    }
  };
}(angular));