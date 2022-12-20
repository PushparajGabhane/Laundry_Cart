const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const bodyParser = require('body-parser');

// Database Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.LOCAL_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

// Middlewares
app.use(express.urlencoded());
app.use(cors())

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting with mongoDB


// PORT
const PORT = process.env.PORT || 5000;
//Importing Routes here
const authRoute = require('./routes/auth/authRoute');
app.use('/', authRoute);

app.listen(PORT, ()=>{
    console.log(`Express server is running on PORT:${PORT}`)
})
