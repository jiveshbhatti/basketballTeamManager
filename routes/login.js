var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login')



/* GET home page for freeAgents */
 router.get('/', loginController.logIn );
 router.post('/', loginController.logInPost)


// router.get('/', function(req,res,next){
//     console.log('hi')
// })
module.exports = router