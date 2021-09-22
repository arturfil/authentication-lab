const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// general middlwares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())


require("dotenv").config();


// db connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected...'))
  .catch(() => console.log("Could not connect to DB"))

// routes
app.use('/api/auth', require('./routes/user.js'))
app.use('/api/teams', require('./routes/team.js'))
app.use('/api/players', require('./routes/player.js'))


// listen to port
app.listen(5000, () => {
  console.log('Server up and running...');
})