app.controller('AdminController', function($rootScope, $scope, $location, HotelService, $state, $stateParams){

    $scope.updateHotel = function(){

        HotelService.updateHotel($scope.data).then(function (res) {

            $state.go("admin");

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Erro interno!!!</p>',
                html:true,
                allowEscapeKey: true,
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#2CBC5B",
                confirmButtonText: "OK",
                customClass: 'swal-wide',
            }, function (confirm) {
                if (confirm) {
                    //document.location.reload();
                }
            });

            console.log(err);

        });

    }

    $scope.getHotelByID = function(id){

        console.log(id);

        HotelService.getHotelByID(id).then(function (res) {
                
            $scope.data = res.data[0];

            $state.go("editar", {id: id});

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Erro interno!!!</p>',
                html:true,
                allowEscapeKey: true,
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#2CBC5B",
                confirmButtonText: "OK",
                customClass: 'swal-wide',
            }, function (confirm) {
                if (confirm) {
                    //document.location.reload();
                }
            });

            console.log(err);

        });

    }

    $scope.insertHotel = function(){

        HotelService.insertHotel($scope.data).then(function (res) {

            $state.go("admin");

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Erro interno!!!</p>',
                html:true,
                allowEscapeKey: true,
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#2CBC5B",
                confirmButtonText: "OK",
                customClass: 'swal-wide',
            }, function (confirm) {
                if (confirm) {
                    //document.location.reload();
                }
            });

            console.log(err);

        });

    }

    $scope.getAllHotels = function(){

        HotelService.getAllHotels().then(function (res) {

            $rootScope.hotels = res.data;

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Erro interno!!!</p>',
                html:true,
                allowEscapeKey: true,
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#2CBC5B",
                confirmButtonText: "OK",
                customClass: 'swal-wide',
            }, function (confirm) {
                if (confirm) {
                    //document.location.reload();
                }
            });

        });

    }

    $scope.init = function(){

        $rootScope.hotels = [];

        $scope.data = [];

        if ($stateParams.id) {
            $scope.getHotelByID($stateParams.id);
        }

        $scope.getAllHotels();
    }

    $scope.init();


    $scope.deleteHotel = function(id){

        HotelService.deleteHotel(id);

        $scope.getAllHotels();
    }

});