const express = require('express')
const router = express.Router()
const matchController =   require('../controllers/match.controller');

// Retrieve all employees

router.get('/', matchController.findAll);

// Create a new employee

router.post('/', matchController.create);

// Retrieve a single employee with id

router.get('/:id', matchController.findById);

// Update a employee with id


router.put('/:id', matchController.update);

// Delete a employee with id

router.delete('/:id', matchController.delete);

module.exports = router