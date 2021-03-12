const express = require('express');
const router = express.Router();
const genderController = require("../controllers/genderController");

router.get('/', genderController.readAll);
router.get('/:id', genderController.read);

module.exports = router;