const express = require("express");
const {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
} = require("../controllers/teamController");
const router = express.Router();

const { validateJwt } = require('../middlewares/validateJwt')



// GET all meetings
router.get('/', validateJwt, getAllTeams) // validateJwt

// GET single meeting
router.get('/team/:id', validateJwt, getTeamById)

// POST meeting
router.post('/team', validateJwt, createTeam)

// PUT category
router.put('/team/:id', validateJwt, updateTeam)

// DELETE categroy
router.delete('/team/:id', validateJwt, deleteTeam)



module.exports = router
