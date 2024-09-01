const express = require('express');
const { getHomepage, getABC, getDinhgiaan } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/dinhgiaan', getDinhgiaan);

module.exports = router;