const Hotel = require('./../../models/hotel/hotel');
const HotelController = function () { };

HotelController.prototype.index = function (params) {
    const hotel = new Hotel();
    let hotels = hotel.get();
    let multipleStars = [];
    let i, len, tmpHotels = [];

    if (params && !isNaN(params.id)) {
        return hotel.searchByAttribute('id', params.id, hotels);
    }

    if (params && params.name && params.name.trim() !== '') {
        hotels = hotel.searchByAttribute('name', params.name, hotels);
    }

    if (params && params.stars) {
        multipleStars = params.stars.split(',');

        if (multipleStars.length > 1) {
            for (i = 0, len = multipleStars.length; i < len; i++) {
                tmpHotels = tmpHotels.concat(hotel.findByAttribute('stars', multipleStars[i].trim(), hotels));
            }
            hotels = tmpHotels;
        } else {
            hotels = hotel.findByAttribute('stars', params.stars, hotels);
        }
    }

    return hotels;
};

module.exports = HotelController;
