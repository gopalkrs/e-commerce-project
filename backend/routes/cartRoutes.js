const express = require('express');
const router = express.Router();
const addCart = require('../controllers/cart-controllers/addCart');
const getCart = require('../controllers/cart-controllers/getCart');
const authentication = require('../authorization/authentication');
const removeFromCart = require('../controllers/cart-controllers/removeFromCart');
const updateCart = require('../controllers/cart-controllers/updateCart');



router.post('/', authentication, addCart);
router.put('/', authentication, updateCart);
router.get('/:userid', getCart);
router.delete('/:userid/:cartitemid', removeFromCart);

module.exports = router;