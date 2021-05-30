const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))
    

app.listen(5000, () => console.log('server started'));