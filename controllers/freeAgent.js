const freeAgentRoute = require('../routes/agentPoolIndex')

const freeAgentHome = function(req, res, next) {
    console.log('entering freeagent route')
    res.render('freeAgents/freeAgentPoolIndex', {  })
}



module.exports = {
    freeAgentHome,

}