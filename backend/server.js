require('dotenv').config()

const exp = require('express')
const mon = require('mongoose')
const worRaut = require('./routes/workout')


//express app
const app = exp()

//middleware
app.use(exp.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workout',worRaut)

//connect to db
mon.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
    console.log('connect to the db & listening on port ',process.env.PORT)
})
  })
  .catch((error)=>{
    console.log(error)
  })

