const express = require("express");
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");
const router = express.Router();


const { validateJwt } = require('../middlewares/validateJwt')


// GET all meetings
router.get('/', validateJwt,  getAllPlayers) // validateJwt

// GET single meeting
router.get('/player/:id', validateJwt, getPlayerById)

// POST meeting
router.post('/player', validateJwt, createPlayer)

// PUT category
router.put('/player/:id', validateJwt, updatePlayer)

// DELETE categroy
router.delete('/player/:id', validateJwt, deletePlayer)



module.exports = router
