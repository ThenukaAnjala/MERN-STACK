const exp = require('express')
const rou = exp.Router()
const CreatWork = require('../controller/Workoutcontroller')
rou.get('/', (req, res) =>{
    res.json({mssg:'Get all workouts'})
})

rou.get('/:id',(req, res) =>{
    res.json({mssg:'Get a single workouts'})
})

rou.post('/',CreatWork)
rou.delete('/:id',(req, res) => {
    res.json({mssg:'Delete a single workouts'})
})
rou.patch('/:id',(req, res)=>{
    res.json({mssg:'Update a single workouts'})
})

module.exports  = rou