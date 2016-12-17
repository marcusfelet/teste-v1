(function (angular) {
  angular.module('app')
    .controller('AdminController', adminController);

  adminController.$inject = ['hotelsData', 'HotelService'];

  function adminController(hotelsData, HotelService) {
    var vm = this;
    var actualIndex = -1;

    vm.gridList = hotelsData.data.msg;
    vm.btnNew = btnNew;
    vm.btnEdit = btnEdit;
    vm.btnSave = btnSave;
    vm.btnRemove = btnRemove;
    vm.btnCancel = btnCancel;
    vm.btnConfirmDelete = btnConfirmDelete;

    vm.state = 'GRID';
    vm.actualHotel = {
      _id: '',
      hotel: '',
      resort: '',
      latitude: 0,
      longitude: 0,
      stars: 0,
      tags: '',
      overview: '',
      about: '',
      rooms: '',
      amenities: ''
    };

    function clearActualHotel() {
      vm.actualHotel._id = '';
      vm.actualHotel.hotel = '';
      vm.actualHotel.resort = '';
      vm.actualHotel.latitude = 0;
      vm.actualHotel.longitude = 0;
      vm.actualHotel.stars = 0;
      vm.actualHotel.tags = '';
      vm.actualHotel.overview = '';
      vm.actualHotel.about = '';
      vm.actualHotel.rooms = '';
      vm.actualHotel.amenities = '';
    };

    function loadActualHotel(photel) {
      vm.actualHotel._id = photel._id;
      vm.actualHotel.hotel = photel.hotel;
      vm.actualHotel.resort = photel.resort;
      vm.actualHotel.latitude = photel.latitude;
      vm.actualHotel.longitude = photel.longitude;
      vm.actualHotel.stars = photel.stars;
      vm.actualHotel.tags = photel.tags.join(',');
      vm.actualHotel.overview = photel.description.overview;
      vm.actualHotel.about = photel.description.about;
      vm.actualHotel.rooms = photel.description.rooms;
      vm.actualHotel.amenities = photel.description.amenities;
    };

    function btnNew() {
      actualIndex = -1;
      clearActualHotel();
      vm.state = 'EDIT';
    };

    function btnEdit(photel, pindex) {
      vm.state = 'EDIT';
      actualIndex = pindex;
      loadActualHotel(photel);
    };

    function btnSave() {

      var newHotel = {
        id: vm.actualHotel._id,
        hotel: vm.actualHotel.hotel,
        resort: vm.actualHotel.resort,
        latitude: vm.actualHotel.latitude,
        longitude: vm.actualHotel.longitude,
        stars: vm.actualHotel.stars,
        tags: [],
        description: {
          overview: vm.actualHotel.overview,
          rooms: vm.actualHotel.rooms,
          about: vm.actualHotel.about,
          amenities: vm.actualHotel.amenities
        }
      };
      newHotel.tags = vm.actualHotel.tags.split(',');

      if (actualIndex === -1) {
        HotelService.create(newHotel)
          .then(function (result) {
            console.log('result.data.msg');
            console.log(result.data.msg);
            vm.gridList.push(result.data.msg);
            btnCancel();
          })
          .catch(function (err) {
            console.log(err);

          });
      }
      else {
        HotelService.update(newHotel)
          .then(function (result) {

            var hotelresult = result.data.msg;
            vm.gridList[actualIndex]._id = hotelresult.id;
            vm.gridList[actualIndex].hotel = hotelresult.hotel;
            vm.gridList[actualIndex].resort = hotelresult.resort;
            vm.gridList[actualIndex].latitude = hotelresult.latitude;
            vm.gridList[actualIndex].longitude = hotelresult.longitude;
            vm.gridList[actualIndex].stars = hotelresult.stars;
            vm.gridList[actualIndex].tags = hotelresult.tags;
            vm.gridList[actualIndex].description = hotelresult.description;
            hotelresult = null;
            btnCancel();
          })
          .catch(function (err) {
            console.log(err);

          });
      }


    };

    function btnRemove(photel, pindex) {
      vm.state = 'DELETE';
      actualIndex = pindex;
      loadActualHotel(photel);
    };

    function btnCancel() {
      vm.state = 'GRID';
      actualIndex = -1;
      clearActualHotel();
    };

    function btnConfirmDelete() {
      if (actualIndex > -1) {
        HotelService.remove(vm.actualHotel._id)
          .then(function() {
            vm.gridList.splice(actualIndex, 1);
            btnCancel();
          })
          .catch(function () {

          });
      }
    };

  };
}(angular));
