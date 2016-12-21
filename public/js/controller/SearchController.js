(function (angular) {
  angular.module('app')
    .controller('SearchController', searchController);

  searchController.$inject = ['hotelsData'];

  function searchController(hotelsData) {
    var vm = this;

    vm.gridList = hotelsData.data.msg;
    vm.getStar = getStar;

    vm.searchStr = '';


    function getStar(indice, star) {
      return (star >= indice ) ? 'fa fa-star' : 'fa fa-star-o';
    };


  };

} (angular));
