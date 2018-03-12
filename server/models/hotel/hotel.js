const hotels = require('./../../mockdata/data.json');
const Hotel = function () {
    this.hotels = hotels;
};

Hotel.prototype.get = function () {
    return this.hotels;
};

Hotel.prototype.findByAttribute = function (attribute, value, data) {
    let collection = this.hotels;

    if (!attribute || !value) {
        return false;
    }

    if (Array.isArray(data)) {
        collection = data;
    }

    return collection
                .filter((hotel) => hotel[attribute] == value);
};

Hotel.prototype.searchByAttribute = function (attribute, query, data) {
    let collection = this.hotels;

    if (!attribute || !query) {
        return false;
    }

    if (Array.isArray(data)) {
        collection = data;
    }

    return collection
                .filter((hotel) => hotel[attribute].toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 );
};

module.exports = Hotel;
