require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRouter');
const userRoutes = require('./routes/userRouter');
const cors = require('cors')
const app = express();
/**Some more changes */

var corsOptions = {
    origin: 'https://65d08f1b28293d88c0cb9076--storied-lebkuchen-b91d3c.netlify.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//default middleware
app.use(express.json());


app.use((req, res, next)=>{

    console.log(req.path, req.method);
    next();
})



//routes for workout api
app.use('/api/workout', cors(corsOptions), workoutRoutes);

//routes for user Auth
app.use('/api/user', userRoutes);

//Database connect
mongoose.connect(process.env.MONGO_URI).then(()=>{

    app.listen(process.env.PORT, ()=>{

        console.log('ConneWctescd ds to DB, port no:', process.env.PORT);
    })

}).catch((error)=>{

    console.log(error);
})