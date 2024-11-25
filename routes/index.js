const { index } = require('../controllers/userController');
const router = require('express').Router();

router.get('/', index);

module.exports = router;