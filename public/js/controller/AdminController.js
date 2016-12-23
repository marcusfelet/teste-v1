(function (angular) {
  angular.module('app')
    .controller('AdminController', adminController);

  adminController.$inject = ['$scope', '$timeout', 'hotelsData', 'HotelService'];

  function adminController($scope, $timeout, hotelsData, HotelService) {
    var vm = this;
    var actualIndex = -1;
    var lstErrorsTemp = [];

    vm.gridList = hotelsData.data.msg;
    vm.btnNew = btnNew;
    vm.btnEdit = btnEdit;
    vm.btnSave = btnSave;
    vm.btnRemove = btnRemove;
    vm.btnCancel = btnCancel;
    vm.btnConfirmDelete = btnConfirmDelete;
    vm.lstMsgErrors = [];

    vm.state = 'GRID';
    vm.actualHotel = {
      _id: '',
      hotel: '',
      resort: '',
      latitude: '',
      longitude: '',
      stars: '',
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
      vm.actualHotel.latitude = '';
      vm.actualHotel.longitude = '';
      vm.actualHotel.stars = '';
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
      vm.lstMsgErrors = [];
      vm.state = 'EDIT';
      actualIndex = pindex;
      loadActualHotel(photel);
    };

    function updateHotel(photel) {
      vm.gridList[actualIndex]._id = photel.id;
      vm.gridList[actualIndex].hotel = photel.hotel;
      vm.gridList[actualIndex].resort = photel.resort;
      vm.gridList[actualIndex].latitude = photel.latitude;
      vm.gridList[actualIndex].longitude = photel.longitude;
      vm.gridList[actualIndex].stars = photel.stars;
      vm.gridList[actualIndex].tags = photel.tags;
      vm.gridList[actualIndex].description = photel.description;
    }

    function btnSave() {
      vm.lstMsgErrors = [];

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

      HotelService.validate(newHotel)
        .then(function (result) {
          if (actualIndex === -1)
            return HotelService.create(newHotel);
          else
            return HotelService.update(newHotel);
        })
        .then(function (result) {
          $scope.$apply(function() {
            if (actualIndex === -1)
              vm.gridList.push(result.data.msg);
            else
              updateHotel(result.data.msg);
            btnCancel();
          });
        })
        .catch(function (err) {
          $scope.$apply(function() {
            if (err.hasOwnProperty('status')) {
                vm.lstMsgErrors = err.messages;
            }
            else {
              vm.lstMsgErrors.push({
                message: err.data.msg
              });
            }
          });
        });
    };

    function btnRemove(photel, pindex) {
      vm.state = 'DELETE';
      actualIndex = pindex;
      loadActualHotel(photel);
    };

    function btnCancel() {
      vm.state = 'GRID';
      actualIndex = -1;
      vm.lstMsgErrors = [];
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
