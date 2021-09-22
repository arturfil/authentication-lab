const express = require("express");
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");


const { validateJwt } = require("../middlewares/validateJwt");
const router = express.Router();

router.get('/', validateJwt, getAllPlayers)
router.get('/player', validateJwt, getPlayerById)
router.post('/player/:id', validateJwt, createPlayer)
router.put('/player/:id', validateJwt, updatePlayer)
router.delete('/player/:id',validateJwt, deletePlayer)

module.exports = router;
