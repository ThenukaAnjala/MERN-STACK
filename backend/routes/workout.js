const exp = require('express')
const Workout = require('../models/Workout')
const rou = exp.Router()

rou.get('/', (req, res) =>{
    res.json({mssg:'Get all workouts'})
})

rou.get('/:id',(req, res) =>{
    res.json({mssg:'Get a single workouts'})
})

rou.post('/',async(req, res) => {
    const{title,reps,load} = req.body
    try{
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error:error.message})
    }
   
})
rou.delete('/:id',(req, res) => {
    res.json({mssg:'Delete a single workouts'})
})
rou.patch('/:id',(req, res)=>{
    res.json({mssg:'Update a single workouts'})
})

module.exports  = rou