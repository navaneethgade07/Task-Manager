const express = require('express');
const app = express();
const port = process.env.port || 5000;
const task = require('./routes/task');
const connectDB = require('./db/connect')
require('dotenv').config();

// middlewares
// To parse the incoming requests with JSON payloads for req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// for routing 
app.use('/api/v1/task' ,task);


// Routes
app.get('/hello' , (req,res)=>{
    res.send('Task Manager');
})


// Running the port if and only if  when the database is succesfully connected using async() function
const run = async()=>{
    try {
        // until connectDB() resolve it waits then runs the port
        // hiding using process.env.variable
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`The port is listening on http://localhost:${port}`));
        
    } catch (error) {
        console.log(error);
    }
}

run()

