(function (angular) {
  angular.module('app')
    .controller('DetailController', detailController);

  detailController.$inject = ['hotelsData'];

  function detailController(hotelsData) {
    var vm = this;

    vm.hotel = hotelsData.data.msg;
    vm.getStar = getStar;


    function getStar(indice, star) {
      return (star >= indice ) ? 'fa fa-star' : 'fa fa-star-o';
    };

  };
}(angular));
