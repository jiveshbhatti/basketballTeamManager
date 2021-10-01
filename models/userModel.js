const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcrypt");
const FreeAgentModel = require("./freeAgent");
const teamLoginSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide team name"],
  },
  email: {
    type: String,
    required: [true, "Please provide team name"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  
  },

  players: [],
});

//     //!only run this funciton if password was actually modified.

//     &hash password with cost of 12

const TeamSignUpInst = mongoose.model("TeamSignUp", teamLoginSchema);

module.exports = {
  TeamSignUpInst,
};
