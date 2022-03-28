const router = require('express').Router();
const {createpost} = require('../controller/post.controller');

router.post('/', createpost);

module.exports = router;