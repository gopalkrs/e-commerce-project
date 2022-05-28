const express = require('express');
const router = express.Router();

const pricefilter = require('../controllers/filter-cotrollers/pricefilter');
const ratingsfilter = require('../controllers/filter-cotrollers/ratingsfilter');
const popularproducts = require('../controllers/filter-cotrollers/popularproducts');
const searchProducts = require('../controllers/filter-cotrollers/searchProducts');



router.get('/price/?', pricefilter);
router.get('/ratings/?', ratingsfilter);
router.get('/popular', popularproducts);
router.get('/search/?', searchProducts);


module.exports = router;