app.controller('HotelController', function($rootScope, $scope, HotelService){

    $scope.init = function(){

    	$rootScope.hotels = [];

        HotelService.random().then(function (res) {

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

    $scope.init();

});