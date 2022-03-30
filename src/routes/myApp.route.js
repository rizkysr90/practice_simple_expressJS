const express = require('express');
const router = express.Router();
const userRouter = require('./user/user.route');

router.get('/',(req,res) => res.send('Hello World'));
router.use('/user',userRouter);

module.exports = router;