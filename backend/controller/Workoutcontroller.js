const Workout = require('../models/Workout')

//get all workout

const getWorkout = async(req,res) =>{
    try{
        const workout = await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(workout)
    }catch(error){
        res.status(404).json({error:"Some thing else"})
    }
}

//get single for id
const singleWorkout = async(req,res) => {
    const  id  =req.params.id

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:"Not sach workout"})
    }
    res.status(200).json(workout)
}

//create new woarkout
const createWorkout = async(req,res) => {
    const{title,reps,load} = req.body

    //add doc db
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:"Input the all rows"})
    }
}

module.exports = {
    createWorkout,
    getWorkout,
    singleWorkout
}