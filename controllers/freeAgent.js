const freeAgentRoute = require('../routes/agentPoolIndex')
const axios = require('axios')
const freeAgentModel = require('../models/freeAgent')
const mongoose = require('mongoose')




const listOfPlayers =   async (req, res) => {
    const freeAgents = await freeAgentModel.FreeAgent.find({})
    //console.log(freeAgents)
    // res.render('products/index', {products})
    return freeAgents
  }


const freeAgentHome = async function(req, res, next) {
    console.log('entering freeagent route')

     const listOfAllAgents = await listOfPlayers()
  
    await console.log(listOfAllAgents)
   
    res.render('freeAgents/freeAgentPoolIndex', { listOfAllAgents })

}

//get request
const addAgent = (req,res,next) => {


    res.render('freeAgents/addAgent', {  })
}

const newImage = (req,res,next) => {

    axios.get('https://source.unsplash.com/collection/90553160/800x800')
    .then((response) => {
       
        const photo = response

        return photo
       
      });

     
      return photo
}

//post request

const addAgentPost = async (req,res,next) => {

    console.log(req.body)


const newPlayer = new freeAgentModel.FreeAgent({
 name: req.body.name,
 image : req.body.image,
 position : req.body.position,
 height: req.body.height,
 description: req.body.description,
 age: req.body.age,
 location: req.body.location,
})

await newPlayer.save()

 console.log(newPlayer)
    res.redirect('/freeAgentPool')
}

module.exports = {
    freeAgentHome,
    listOfPlayers,
    addAgent,
    addAgentPost,
    newImage,

}
