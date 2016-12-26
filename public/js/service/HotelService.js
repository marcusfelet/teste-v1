app.factory('HotelService', function ($http) {

    return {

        deleteHotel: function (id) {
            return $http({
                url: '/delete',
                method: 'GET',
                params: {id: id}
            });
        },

        updateHotel: function (data) {
            return $http({
                url: '/update',
                method: 'POST',
                params: data
            });
        },

        getHotelByID: function (id) {
            return $http({
                url: '/get',
                method: 'GET',
                params: {id: id}
            });
        },

        insertHotel: function (data) {
            return $http({
                url: '/save',
                method: 'POST',
                params: data
            });
        },

        getAllHotels: function () {
            return $http({
                url: '/list',
                method: 'GET',
                params: {}
            });
        },

        random: function () {
            return $http({
                url: '/random',
                method: 'GET',
                params: {}
            });
        },
    }

});
