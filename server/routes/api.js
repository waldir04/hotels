const express = require('express');
const router = express.Router();
const HotelController = require('./../controllers/hotel/hotel.controller');
const hotelController = new HotelController();

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/hotels', (req, res) => {
    res.send(hotelController.index(req.query));
});

module.exports = router;
