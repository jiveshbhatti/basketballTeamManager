var express = require('express');
var router = express.Router();
const freeAgentController = require('../controllers/freeAgent')



/* GET home page for freeAgents */
router.get('/', freeAgentController.freeAgentHome);

  module.exports = router