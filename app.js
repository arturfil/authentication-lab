const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// db connection
mongoose.connect('mongodb://localhost/soccerteams')
  .then(() => console.log('DB connected...✔️'))
  .catch(() => console.log("Could not connect to DB ❌"))

// general middlwares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

// routes

// listen to port
app.listen(5000, () => {
  console.log('Server up and running ⚡');
})