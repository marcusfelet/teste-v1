(function (angular) {
  angular.module('app')
  .config(
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.tpl.html'
      })
      .when('/search', {
      /*  controller:  frontApp.modules.courses.controllers.courseDetail.name,
        controllerAs:  frontApp.modules.courses.controllers.courseDetail.nameas,*/
        templateUrl: 'views/search.tpl.html',
        showButton: false,
        access: {
          requiresLogin: true

        }
      })
      .when('/admin', {
      /*  controller:  frontApp.modules.courses.controllers.courseDetail.name,
        controllerAs:  frontApp.modules.courses.controllers.courseDetail.nameas,*/
        templateUrl: 'views/admin.tpl.html',
        showButton: false,
        access: {
          requiresLogin: true

        }
      })
      .otherwise({redirectTo:'/'})
  });
}(angular))
