const express = require('express');
const router = express.Router();
const userController = require('./../../controllers/user/user.controller');
// Current route = .../user
router.route('/')
    .get(userController.get)
    .post(userController.create);
    
router.route('/:userId')
    .get(userController.getById)
    .patch(userController.update)
    .delete(userController.deleteData);

module.exports = router;