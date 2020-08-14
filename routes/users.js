const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const userHandler = require('./handler/users');

/* GET users listing. */
router.post('/register', userHandler.register);
router.post('/login', userHandler.login);
router.put('/', verifyToken, userHandler.update);
router.get('/:id', userHandler.get);

module.exports = router;
