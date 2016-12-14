var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/hotels.html',
        controller: 'HotelController'
    })
    .when('/admin', {
        templateUrl : 'templates/admin.html',
        controller: 'AdminController'
    })
    .otherwise({
	    redirectTo: '/'
	});
 
});
