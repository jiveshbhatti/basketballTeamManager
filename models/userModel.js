const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const bcrypt = require('bcrypt');
const FreeAgentModel  = require('./freeAgent');
const teamLoginSchema = new Schema({

    name: {
    type: String,
    required: [true, 'Please provide team name']},
    email: {type: String,
    required: [true, 'Please provide team name'],
    unique: true,
    lowercase:true,
    validate: [validator.isEmail, 'Please provide a valid email']},

    password: {

    type: String,
required: [true, 'Please provide a password'],
minlength:8

},
    passwordConfirm: {
        
        type: String,
        required: [true,'Please confirm your password'],
        // validate:{
        //     //!this only works on save!!
        //     validator: function(el) {
        //         return el === this.password //&this in this case is referencing to the password in this object above
        //     }
        // }
    },

    players: []
})

// teamLoginSchema.pre('save', async function(next){

//     //!only run this funciton if password was actually modified. 
//     if(!this.isModified('password'))//if password is not been modified then exit this funciton and return middleware
//     return next()

//     &hash password with cost of 12
//     this.password = await bcrypt.hash(this.password,12)//hash is the asynchronous command

//     this.passwordConfirm = undefined;
//     next()
// })







const TeamSignUpInst = mongoose.model('TeamSignUp', teamLoginSchema)



module.exports = {
    TeamSignUpInst,
    
}