const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/loginsignup-controllers/loginUser');
const signupUser = require('../controllers/loginsignup-controllers/signupUser');
const getAUser = require('../controllers/loginsignup-controllers/getAUser');


router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/:userid', getAUser);

module.exports = router;