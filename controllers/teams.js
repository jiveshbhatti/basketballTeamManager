const teamRoute = require('../routes/teams')
const axios = require('axios')
const teamModel = require('../models/freeAgent')
const mongoose = require('mongoose')
const userModel = require('../models/userModel')
const freeAgentModel = require('../models/freeAgent')




const teams = async (req,res,next)=>{
    
  

    const team = await teamModel.Team.find({})
   

    //!second teams database code

    const newTeamsAdded = await userModel.TeamSignUpInst.find({})
    
 


   
     res.render('teams/teamsIndex', {team, newTeamsAdded})
    //return team

}


const addPlayer = async (req,res,next)=> {
    console.log('addplayer function')
    //const team= req.params.id
    const player = req.params.id

    console.log(player)
    

    const freeAgent = await freeAgentModel.FreeAgent.findById(player)
    console.log(freeAgent)
    //team.player.push({})

}

const signup = async(req,res,next)=>{


    res.render('teams/addTeam',{})
}
const showTeam = async(req,res,next)=>{
  
    const freeAgents = await freeAgentModel.FreeAgent.find({});


    res.render('teams/viewTeam', {freeAgents})
}

module.exports = {

    addPlayer,
    teams,
    signup,
    showTeam
}