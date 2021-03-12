const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.readAll);
router.get('/:id', userController.read);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;