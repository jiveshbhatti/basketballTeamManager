const  teamModel  = require('../models/userModel')
const User = require('./../models/userModel')

exports.signup = async(req,res,next) =>{

    
    const body = req.body
    console.log(body)

  
const newTeam = await new teamModel.TeamSignUpInst(req.body)

await newTeam.save()


res.status(201).json({

    status:'success',
    data:{

        team :newTeam
    }
})
}