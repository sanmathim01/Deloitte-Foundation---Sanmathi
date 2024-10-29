const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express()
const PORT = 3000;

app.use(express.json());

//MongoDB connection
const mongoURI = 'mongodb+srv://sanmathim01:<Del@1539>@cluster0.e692f.mongodb.net/';

mongoose.connect(mongoURI)
    .then(()=> console.log('Mongodb connected.....'))
        .catch(err=> console.log(err));

app.get('/', (req, res)=>{
    res.send('Connected to MongoDB');
});

app.get('/api/users', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).send(err);
    }
});
app/post('/api/users')
app.listen(PORT,()=>{})

