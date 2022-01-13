const express = require('express')
const router = express.Router()
const teamController =   require('../controllers/team.controller');

// Retrieve all employees

router.get('/', teamController.findAll);

// Create a new employee

router.post('/', teamController.create);

// Retrieve a single employee with id

router.get('/:id', teamController.findById);

// Update a employee with id


router.put('/:id', teamController.update);

// Delete a employee with id

router.delete('/:id', teamController.delete);

module.exports = router