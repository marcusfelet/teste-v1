(function (angular) {
  angular.module('app')
    .controller('AdminController', adminController);

  adminController.$inject = ['hotelsData', 'HotelService'];

  function adminController(hotelsData, HotelService) {
    var vm = this;

    vm.gridList = hotelsData.data.msg;
    vm.btnEdit = btnEdit;
    vm.btnRemove = btnRemove;
    vm.btnCancel = btnCancel;
    vm.state = 'GRID';

    vm.actualHotel = {
      hotel: '',
      resort: '',
      latitude: 0,
      longitude: 0,
      stars: 0,
      tags: [],
      overview: '',
      about: '',
      rooms: '',
      amenities: ''
    };

    function btnEdit(photel) {
      vm.state = 'EDIT';
      vm.actualHotel.hotel = photel.hotel;
      vm.actualHotel.resort = photel.resort;
      vm.actualHotel.latitude = photel.latitude;
      vm.actualHotel.longitude = photel.longitude;
      vm.actualHotel.stars = photel.stars;
      vm.actualHotel.tags = photel.tags;
      vm.actualHotel.overview = photel.description.overview;
      vm.actualHotel.about = photel.description.about;
      vm.actualHotel.rooms = photel.description.rooms;
      vm.actualHotel.amenities = photel.description.amenities;
    }

    function btnRemove(photel) {

    }

    function btnCancel() {
      vm.state = 'GRID';
    }

  };
}(angular));