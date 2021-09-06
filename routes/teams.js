var express = require('express');
var router = express.Router();
const teamsController = require('../controllers/teams')



/* GET home page for freeAgents */
router.get('/', teamsController.teams);



module.exports = router