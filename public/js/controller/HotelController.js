angular.module('app')
    .controller('HotelController', HotelController);

HotelController.$inject = ['$rootScope', '$state', '$filter', 'HotelService'];

function HotelController($rootScope, $state, $filter, HotelService) {
    var vm = this;

    //methods
    vm.deleteHotel = deleteHotel;
    vm.updateHotel = updateHotel;
    vm.getHotelByID = getHotelByID;
    vm.insertHotel = insertHotel;
    vm.getAllHotels = getAllHotels;

    function deleteHotel() {

    }

    function updateHotel() {

    }

    function getHotelByID() {

    }

    function insertHotel() {

    }

    function getAllHotels() {

    }
}
