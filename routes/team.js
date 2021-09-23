const express = require("express");
const {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");


const { validateJwt } = require("../middlewares/validateJwt");
const router = express.Router();

router.get('/', validateJwt, getAllTeams)
router.get('/team', validateJwt, getTeamById)
router.post('/team', validateJwt, createTeam)
router.put('/team/:id', validateJwt, updateTeam)
router.delete('/team/:id',validateJwt, deleteTeam)

module.exports = router;