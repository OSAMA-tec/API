const express = require('express');
const router = express.Router();
const {signUp} = require('../controllers/Registration/signUp');
const {login} = require('../controllers/Registration/login');




const verifyToken = require('../middleware/auth');



//Registration
router.post('/signup', signUp);
router.post('/login', login);


module.exports = router;