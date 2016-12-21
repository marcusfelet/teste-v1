var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
    
    function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl : 'templates/hotels.html',
                controller: 'HotelController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl : 'templates/admin/index.html',
                controller: 'AdminController'
            })
            .state('editar', {
                url: '/admin/editar/:id',
                templateUrl : 'templates/admin/editar.html',
                controller: 'AdminController'
            })
            .state('cadastrar', {
                url: '/admin/cadastrar',
                templateUrl : 'templates/admin/cadastrar.html',
                controller: 'AdminController'
            })
            .state('deletar', {
                url: '/admin/deletar/:id',
                templateUrl : 'templates/admin/deletar.html',
                controller: 'AdminController'
            });
    }
]);


app.run(function(){
    console.log('...');
});
