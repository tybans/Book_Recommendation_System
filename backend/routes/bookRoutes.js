const express = require('express');
const bookControllers = require('../controllers/bookControllers');
const router = express.Router();

router.get('/search', bookControllers.searchBooks);
router.get('/recommendations/:userId', bookControllers.getRecommendations);

module.exports = router;
