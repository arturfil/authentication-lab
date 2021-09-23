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
const { validateFields } = require('../middlewares/validateField')


// GET all meetings
router.get('/', validateJwt,  getAllPlayers) // validateJwt

// GET single meeting
router.get('/player/:id', validateJwt, getPlayerById)

// POST meeting
router.post('/player', [
  check("name", "Please enter name").not().isEmpty(),
  check("team", "Please enter team").not().isEmpty(),
  check("age", "Please enter age").not().isEmpty(),
  validateFields,
  validateJwt
]
, createPlayer)

// PUT category
router.put('/player/:id', validateJwt, updatePlayer)

// DELETE categroy
router.delete('/player/:id', validateJwt, deletePlayer)



module.exports = router
