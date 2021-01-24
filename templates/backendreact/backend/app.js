const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const routerPost = require('./routes/postRoute');
require('dotenv').config();
app.use(bodyParser.json())
// *********************
//connexion database
// *********************
mongoose.connect(process.env.DB_CONNECTION,
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>console.log('Database connected!'))
.catch(()=>console.log('fail to connect with database!'))






app.use('/posts',routerPost);
app.listen(process.env.PORT | 3000)
module.exports = app;