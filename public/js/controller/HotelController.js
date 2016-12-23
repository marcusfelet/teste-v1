angular.module('app')
    .controller('HotelController', HotelController);

HotelController.$inject = ['$location', 'HotelService', 'hotelsData'];

function HotelController($location, HotelService, hotelsData) {
    var vm = this;

    //methods
    vm.deleteHotel = deleteHotel;
    vm.updateHotel = updateHotel;
    vm.getHotelByID = getHotelByID;
    vm.insertHotel = insertHotel;
    vm.getAllHotels = getAllHotels;
    vm.getStar = getStar;
    vm.moreDetail = moreDetail;

    vm.gridList = hotelsData.data.msg;


    function getStar(indice, star) {
        return (star >= indice ) ? 'fa fa-star' : 'fa fa-star-o';
    };

    function moreDetail(id) {
        $location.path('/hotel/'+id);
    };

    function deleteHotel() {

    }

    function updateHotel() {

    }

    function getHotelByID() {

    }

    function insertHotel() {

    }

    function getAllHotels() {
        console.log(hotelsData.data);
        /*HotelService.getAll().then(function (argument) {
            console.log(argument);
        });*/

    }
}
