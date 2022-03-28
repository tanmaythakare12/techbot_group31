const router = require('express').Router();
const {addUser} = require('../controller/user.controller');

router.post('/', addUser);

module.exports = router;