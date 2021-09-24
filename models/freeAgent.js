const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema;


// mongoose.connect('mongodb://localhost:27017/freeAgent', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("CONNECTION OPEN!!! free-Agents")
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!!!")
//         console.log(err)
//     })

    /**Online Database */
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!! Online database")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

//     const MongoClient = require('mongodb').MongoClient;
//     const assert = require('assert');
    
//     // Connection URL
//     const url = 'mongodb+srv://jiveshbhatti:Sajan1991@cluster0.0tpoi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    
// //     // Use connect method to connect to the Server
// //     MongoClient.connect(url, function(err, client) {
// //       assert.equal(null, err);
// //    client.close(); 

// //     });


    // var cursor = db.collection('freeAgents').find({});
    // console.log(cursor)


const freeAgentSchema = new Schema({

    name: {
       type:String,
        required: true},
        //validate: name.validator},
    image: String,
    age: Number,
    description: String,
    height: String,
    position: String
})

const FreeAgent = mongoose.model('freeAgent', freeAgentSchema)


/**
 * !see if this need to be moved into different file.
 */


const teamSchema = new Schema({

    name: String,
    players: [freeAgentSchema],
    
})

const Team = mongoose.model('team', teamSchema)



// const lakers = new Team ({name: 'lakers', players:[] })

// lakers.save()

// amar.save().then(amar =>{

//     console.log(amar)
// }).catch(e =>{
//     console.log(e)
// })



// const amar = new FreeAgent({name: 'amar', image: 'https://source.unsplash.com/collection/90553160/800x800', age: 24, description: 'Loves his 3', height: '6 feet 2 inches', position: 'SG' })


// amar.save().then(amar =>{

//     console.log(amar)
// }).catch(e =>{
//     console.log(e)
// })



// const vince = new FreeAgent({name: 'vince', image: 'https://source.unsplash.com/collection/90553160/800x800', age: 27, description: 'Loves his 3', height: '5 feet 8 inches', position: 'PG' })


// vince.save().then(amar =>{

//     console.log(amar)
// }).catch(e =>{
//     console.log(e)
// })


module.exports = {

    FreeAgent,
    Team

}


