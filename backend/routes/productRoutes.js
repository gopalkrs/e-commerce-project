const express = require('express');
const router = express.Router();
const getallproducts = require('../controllers/product-controllers/getallproducts');
const getsingleproduct = require('../controllers/product-controllers/getsingleproduct');

router.get('/?', getallproducts);
router.get('/:itemid', getsingleproduct);

module.exports = router;