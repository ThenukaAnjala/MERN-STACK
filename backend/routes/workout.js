const exp = require('express')
const rou = exp.Router()
const {
    createWorkout,
    getWorkout,
    singleWorkout
} = require('../controller/Workoutcontroller')
rou.get('/', getWorkout)

rou.get('/:id',singleWorkout)

rou.post('/', createWorkout)

rou.delete('/:id',(req, res) => {
    res.json({mssg:'Delete a single workouts'})
})
rou.patch('/:id',(req, res)=>{
    res.json({mssg:'Update a single workouts'})
})

module.exports  = rou