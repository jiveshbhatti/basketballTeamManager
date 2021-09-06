const teamRoute = require('../routes/teams')
const axios = require('axios')
const teamModel = require('../models/freeAgent')
const mongoose = require('mongoose')





const teams = async (req,res,next)=>{
    
  

    const team = await teamModel.Team.find({})
   
    
    console.log(team)


   
     res.render('teams/teamsIndex', {team})
    //return team

}


const addPlayer = async (req,res,next)=> {

    const team= req.params.id
    const player = req.params.playerid

    const freeAgent = await freeAgentModel.FreeAgent.findById(team)

    //team.player.push({})

}


module.exports = {

    addPlayer,
    teams
}