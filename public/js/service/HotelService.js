angular.module('app')
    .service('hotelService', searchService);

searchService.$inject = ['$http'];

function searchService($http) {
    this.deleteHotel = function(tag) {
        return $http({
            url: '/api',
            method: 'DELETE',
            params: {}
        });
    };

    this.updateHotel = function(tag) {

    };

    this.getHotelByID = function(tag) {

    };

    this.insertHotel = function(tag) {

    };

    this.getAllHotels = function(tag) {

    };
