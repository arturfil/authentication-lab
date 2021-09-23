const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

// db connection
mongoose.connect('mongodb://localhost/soccerteams')
  .then(() => console.log('DB connected...✔️'))
  .catch(() => console.log("Could not connect to DB ❌"))

// general middlwares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// routes

app.use('/api/auth' , require('./routes/user'));
app.use('/api/players' , require('./routes/player'));
app.use('/api/teams', require('./routes/team'))

// listen to port
app.listen(5000, () => {
  console.log('Server up and running ⚡');
})