const express = require('express');
const router = express.Router();
const postPayments = require('../controllers/payment-controllers/postPayments');
const authentication = require('../authorization/authentication');



router.post('/', postPayments);

module.exports = router;