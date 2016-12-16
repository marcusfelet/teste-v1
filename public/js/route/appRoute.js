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
      /*  controller:  frontApp.modules.courses.controllers.courseDetail.name,
        controllerAs:  frontApp.modules.courses.controllers.courseDetail.nameas,*/
        templateUrl: 'views/admin.tpl.html',
        access: {
          requiresLogin: true

        }
      })
      .otherwise({redirectTo:'/'})
  });
}(angular))
