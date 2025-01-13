const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/controllerMovies');
const validateObj = require('../middleware/ValidateObj');

// index
router.get('/', moviesController.index);

// show
router.get('/:id', moviesController.show);

// store
router.post('/', validateObj, moviesController.store);

// // update
// router.put('/:id', moviesController.update);

// // modify
// router.patch('/:id', moviesController.modify);

// // destroy
// router.delete('/:id', moviesController.destroy);

module.exports = router;