const express = require('express');
const { getHomepage, getUsers, getDinhgiaan } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/users', getUsers);

router.get('/dinhgiaan', getDinhgiaan);

module.exports = router;