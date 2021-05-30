const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/user')
    .then(() => console.log('Db connected'))
    .catch(error => console.log(error))

    app.use(cors())
app.use(express.json())


app.post('/register', (req, res) => {
    
    const user = User(req.body)

    user.save()

     console.log(user)

    //res.send(user)

})

app.listen(5000, () => console.log('server started'));