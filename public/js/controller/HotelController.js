app.controller('HotelController', function($rootScope, $scope, HotelService){

    $scope.init = function(){

        HotelService.random().then(function (res) {

            console.log(res);

        }, function (err) {

            alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });
    }

});