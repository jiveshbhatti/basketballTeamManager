const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

/**Online Database */
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!! Online database");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const freeAgentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //validate: name.validator},
  image: String,
  age: Number,
  description: String,
  height: String,
  position: String,
});

const FreeAgent = mongoose.model("freeAgent", freeAgentSchema);

/**
 * !see if this need to be moved into different file.
 */

const teamSchema = new Schema({
  name: String,
  players: [freeAgentSchema],
});

const Team = mongoose.model("team", teamSchema);

module.exports = {
  FreeAgent,
  Team,
};
