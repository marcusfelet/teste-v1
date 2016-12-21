(function (angular) {
  angular.module('app')
  .config(
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
     });
    $routeProvider
      .when('/', {
        controller: 'HotelController',
        controllerAs: 'hotelCtrl',
        templateUrl: 'views/home.tpl.html',
        resolve: {
          hotelsData: function (HotelService) {
            return HotelService.getAll();
          }
        }
      })
      .when('/hotel/:id', {
        controller: 'DetailController',
        controllerAs: 'detailCtrl',
        templateUrl: 'views/detail.tpl.html',
        resolve: {
          hotelsData: function ($route, HotelService) {
            return HotelService.getById($route.current.params.id);
          }
        }
      })
      .when('/search', {
        controller: 'SearchController',
        controllerAs: 'searchCtrl',
        templateUrl: 'views/search.tpl.html',
        resolve: {
          hotelsData: function (HotelService) {
            return HotelService.getAll();
          }
        }
      })
      .when('/admin', {
        controller: 'AdminController',
        controllerAs: 'adminCtrl',
        templateUrl: 'views/admin.tpl.html',
        resolve: {
          hotelsData: function (HotelService) {
            return HotelService.getAll();
          }
        }
      })
      .otherwise({redirectTo:'/'})
  });
}(angular))
