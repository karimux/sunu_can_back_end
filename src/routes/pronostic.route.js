const express = require('express')
const router = express.Router()
const pronosticController =   require('../controllers/pronostic.controller');

// Retrieve all poules

router.get('/', pronosticController.findAll);

// Create a new poule

router.post('/', pronosticController.create);

// Retrieve a single poule with id

router.get('/:id', pronosticController.findById);

// Update a poule with id


router.put('/:id', pronosticController.update);

// Delete a poule with id

router.delete('/:id', pronosticController.delete);

module.exports = router