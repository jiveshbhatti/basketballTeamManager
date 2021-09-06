var express = require('express');
var router = express.Router();
const freeAgentController = require('../controllers/freeAgent')



/* GET home page for freeAgents */
router.get('/', freeAgentController.freeAgentHome);

router.get('/add', freeAgentController.addAgent)
router.post('/add', freeAgentController.addAgentPost)

router.get('/show/:id', freeAgentController.playerShow)

router.get('/delete/:id', freeAgentController.deleteAgent)
router.get('/edit/:id', freeAgentController.editPage)
router.post('/edit/:id', freeAgentController.editAgent)

  module.exports = router