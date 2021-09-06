
const teamRoute = require('../routes/teams')
const axios = require('axios')
const teamModel = require('../models/freeAgent')
const mongoose = require('mongoose')
const userModel = require('../models/userModel')
const freeAgentModel = require('../models/freeAgent')
const loginController = require('../routes/login')


const logIn = async function(req, res, next) {

   
  res.render('teams/loginTeam', {  })

}

const logInPost =  async (req,res,next)=> {

    let email = req.body.email
    let password = req.body.password


   
const findUser =  await userModel.TeamSignUpInst.find({"email": email})



if(!findUser){
    alert('Does not exist')
}

let currentEmail = findUser[0].email
let currentPass = findUser[0].password

console.log(email)
console.log(currentEmail)
console.log(password)
console.log(currentPass)


if((email&&password) === (currentEmail && currentPass)){
console.log('login success')
}
else{
    console.log('wrong pass')
}

}
module.exports= {

    logIn,
    logInPost
}