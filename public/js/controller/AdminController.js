app.controller('AdminController', function($rootScope, $scope, $location, HotelService, $state, $stateParams){

    $scope.updateHotel = function(data){

        HotelService.updateHotel(data).then(function (res) {

            console.log(res);

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Falta implementar a api...</p>',
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

        HotelService.getHotelByID(id).then(function (res) {
    
            $scope.data = res;

            $state.go("editar", {id:_id});

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Falta implementar a api...</p>',
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

            console.log(res);

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Falta implementar a api...</p>',
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

            console.log(res);

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Falta implementar a api...</p>',
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

    $scope.init = function(){

        $rootScope.hotels = [];

        $scope.data = [];

        $rootScope.hotels.push({
            "_id" : 0,
            "hotel": "Hotel Aspen",
            "resort": "Aspen",
            "latitude": 6.62,
            "longitude": -89.0,
            "stars": 4,
            "tags": ["hotel", "aspen", "usa"],
            "description": {
                "overview": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "rooms": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "amenities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        });

        $rootScope.hotels.push({
            "_id" : 1,
            "hotel": "Hotel Aspen",
            "resort": "Aspen",
            "latitude": 6.62,
            "longitude": -89.0,
            "stars": 5,
            "tags": ["hotel", "aspen", "usa"],
            "description": {
                "overview": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "rooms": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "amenities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        });

        $rootScope.hotels.push({
            "_id" : 2,
            "hotel": "Hotel Aspen",
            "resort": "Aspen",
            "latitude": 6.62,
            "longitude": -89.0,
            "stars": 6,
            "tags": ["hotel", "aspen", "usa"],
            "description": {
                "overview": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "about": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "rooms": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "amenities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        });

        if ($stateParams.id) {
            $scope.getHotelByID($stateParams.id);
        }
    }

    $scope.init();


    $scope.deleteHotel = function(id){

        HotelService.deleteHotel(id).then(function (res) {

            console.log(res);

            $scope.init();

        }, function (err) {

            swal({
                title: "Ops!",
                text: '<p>Falta implementar a api...</p>',
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

});