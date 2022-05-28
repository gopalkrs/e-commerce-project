const express = require('express');
const router = express.Router();

const postProductReviews = require('../controllers/review-controllers/postProductReviews');
const getProductReviews = require('../controllers/review-controllers/getProductReviews');
const deleteProductReviews = require('../controllers/review-controllers/deleteProductReviews');
const authentication = require('../authorization/authentication');



router.post('/', authentication, postProductReviews);
router.get('/:productid', getProductReviews);
router.delete('/:productid/:userid/:reviewid', deleteProductReviews);

module.exports = router;