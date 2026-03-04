const express = require('express');
const router = express.Router();
const { getProfessionalData } = require('../controllers/professionalController');

router.get('/', getProfessionalData);

module.exports = router;