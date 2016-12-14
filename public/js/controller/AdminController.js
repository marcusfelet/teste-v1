app.controller('AdminController', function($rootScope, $scope, HotelService){

    $scope.deleteHotel = function(id){

    	HotelService.deleteHotel(id).then(function (res) {

    		console.log(res);

        }, function (err) {

        	alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });
    }

    $scope.updateHotel = function(data){

    	HotelService.updateHotel(data).then(function (res) {

    		console.log(res);

        }, function (err) {

        	alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });

    }

    $scope.getHotelByID = function(id){

    	HotelService.getHotelByID(id).then(function (res) {

    		console.log(res);

        }, function (err) {

        	alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });

    }

    $scope.insertHotel = function(data){

    	HotelService.insertHotel(data).then(function (res) {

    		console.log(res);

        }, function (err) {

        	alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });

    }

    $scope.getAllHotels = function(){

    	HotelService.getAllHotels().then(function (res) {

    		console.log(res);

        }, function (err) {

        	alert("Ops! Ocorreu um erro ao executar a ação.");

            console.log(err);

        });

    }

});