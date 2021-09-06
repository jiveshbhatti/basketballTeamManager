var express = require('express');
var router = express.Router();
const teamsController = require('../controllers/teams')
const authController = require('../controllers/authController')


/* GET home page for freeAgents */
router.get('/', teamsController.teams);

//&login for teams and signup below

router.post('/signup', authController.signup)

module.exports = router