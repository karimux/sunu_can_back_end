const express = require('express')
const router = express.Router()
const equipeController =   require('../controllers/equipe.controller');

// Retrieve all employees

router.get('/', equipeController.findAll);

// Create a new employee

router.post('/', equipeController.create);

// Retrieve a single employee with id

router.get('/:id', equipeController.findById);

// Update a employee with id


router.put('/:id', equipeController.update);

// Delete a employee with id

router.delete('/:id', equipeController.delete);

module.exports = router