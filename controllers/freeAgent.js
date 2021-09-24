const freeAgentRoute = require("../routes/agentPoolIndex");
const axios = require("axios");
const freeAgentModel = require("../models/freeAgent");
const mongoose = require("mongoose");

// const listOfPlayers = async (req, res) => {
//   const freeAgents = await freeAgentModel.FreeAgent.find({});

//   return freeAgents;
// };


async function  listOfPlayers (req,res){
    const freeAgentsOnline = await freeAgentModel.FreeAgent.find({})
    console.log(freeAgentsOnline)
    return freeAgentsOnline;
}
  const playerById = async (req, res) => {

   console.log(req.params.id)

    const playerId = req.params.id

    const freeAgent = await freeAgentModel.FreeAgent.findById(playerId)
    // //console.log(freeAgents)
    // // res.render('products/index', {products})

     console.log(freeAgent)
   return freeAgents

  }

const playerShow = async (req, res) => {
  const player = req.params.id;

  const freeAgent = await freeAgentModel.FreeAgent.findById(player);

  res.render("freeAgents/showAgent", { freeAgent });
};

const freeAgentHome = async function (req, res, next) {
  console.log("entering freeagent route");

  const listOfAllAgents = await listOfPlayers();

  await console.log(listOfAllAgents);

  res.render("freeAgents/freeAgentPoolIndex", { listOfAllAgents });
};

const newImage = (req, res, next) => {
  return "https://source.unsplash.com/collection/90553160/800x800";
};

//get request
const addAgent = (req, res, next) => {
  res.render("freeAgents/addAgent", {});
};

//post request

const addAgentPost = async (req, res, next) => {
  console.log(req.body);

  const newPlayer = new freeAgentModel.FreeAgent({
    name: req.body.name,
    image: req.body.image,
    position: req.body.position,
    height: req.body.height,
    description: req.body.description,
    age: req.body.age,
    location: req.body.location,
  });

  await newPlayer.save();

  console.log(newPlayer);
  res.redirect("/freeAgentPool");
};

const deleteAgent = async (req, res, next) => {
  console.log(req.params.id);

  const player = req.params.id;

  const freeAgent = await freeAgentModel.FreeAgent.findByIdAndDelete(player);

  res.redirect("/freeAgentPool");
};

const editAgent = async (req, res, next) => {
  console.log(req.params.id);

  const player = req.params.id;

  const freeAgent = await freeAgentModel.FreeAgent.findByIdAndUpdate(player, {
    name: req.body.name,
    image: req.body.image,
    position: req.body.position,
    height: req.body.height,
    description: req.body.description,
    age: req.body.age,
    location: req.body.location,
  });
  await freeAgent.save();

  console.log(freeAgent);

  res.redirect(`/freeAgentPool/show/${player}`);
};

const editPage = async (req, res, next) => {
  const player = req.params.id;

  const freeAgent = await freeAgentModel.FreeAgent.findById(player);

  console.log(freeAgent);

  res.render("freeAgents/editAgent", { freeAgent });
};

module.exports = {
  freeAgentHome,
  listOfPlayers,
  addAgent,
  addAgentPost,
  newImage,
  playerShow,
  deleteAgent,
  editAgent,
  editPage,
};
