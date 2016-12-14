app.factory('HotelService', function ($http) {

    return {

        deleteHotel: function (id) {
            return $http({
                url: '/api/hotel/' + id,
                method: 'DELETE',
                params: {}
            });
        },

        updateHotel: function (data) {
            return $http({
                url: '/api/hotel',
                method: 'PUT',
                params: data
            });
        },

        getHotelByID: function (id) {
            return $http({
                url: '/api/hotel/' + id,
                method: 'GET',
                params: {}
            });
        },

        insertHotel: function (data) {
            return $http({
                url: '/api/hotel/save',
                method: 'POST',
                params: data
            });
        },

        getAllHotels: function () {
            return $http({
                url: '/api/hotel',
                method: 'GET',
                params: {}
            });
        },

        random: function () {
            return $http({
                url: '/api/hotel/random',
                method: 'GET',
                params: {}
            });
        },
    }

});
