const mon = require('mongoose')//importing the Mongoos library

const Sche =mon.Schema //Creating a shorthand alias 'Sche' for the Schema class provided by Mongoose

//Defining a schema for a 'work' document
const workSche = new Sche({
    title:{
        type:String,//the 'title' field should be of type String
        required:true//the 'title' field is required
    },
    reps:{
        type:Number,// the 'reps' field should be of the Number
        required:true//the 'reps' field is required
    },
    load:{
        type:Number,// the 'load' field should be of type number
        required:true // the 'load' fild required
    }
},{timestamps:true})

module.exports = mon.model('Workout',workSche)
