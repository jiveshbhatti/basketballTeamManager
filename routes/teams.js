var express = require('express');
var router = express.Router();
const teamsController = require('../controllers/teams')
const authController = require('../controllers/authController')


/* GET home page for freeAgents */
router.get('/', teamsController.teams);

//&login for teams and signup below
router.get('/signup', teamsController.signup)
router.post('/signup', authController.signup)
router.get('/add/:id', teamsController.addPlayer)

module.exports = router