const { model } = require('mongoose')
const Workout = require('../models/Workout')
const createWorkout = async(req,res) => {
    const{title,reps,load} = req.body
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

model.exports = {createWorkout}