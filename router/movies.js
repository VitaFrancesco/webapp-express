const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/controllerMovies');
const reviewsController = require('../controllers/controllerReviews');
const validateObj = require('../middleware/ValidateObj');

// index
router.get('/', moviesController.index);

// show
router.get('/:id', moviesController.show);

// store reviews
router.post('/:id/reviews', validateObj, reviewsController.store);

// // update
// router.put('/:id', moviesController.update);

// // modify
// router.patch('/:id', moviesController.modify);

// destroy review
router.delete('/:id/reviews', reviewsController.destroy);

module.exports = router;