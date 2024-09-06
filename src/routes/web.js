const express = require('express');
const { getHomepage, getUsers, getDinhgiaan, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/users', getUsers);

router.get('/dinhgiaan', getDinhgiaan);

router.post('/create-user', postCreateUser);

module.exports = router;