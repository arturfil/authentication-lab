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
const { validateFields } = require('../middlewares/validateField')



// GET all meetings
router.get('/', validateJwt, getAllTeams) // validateJwt

// GET single meeting
router.get('/team/:id', validateJwt, getTeamById)

// POST meeting
router.post('/team', [ 
check("name", "Please enter name").not().isEmpty(),
check("country", "Please enter country").not().isEmpty(),
check("players", "Please enter players").not().isEmpty(),
validateFields,
]
, createTeam)

// PUT category
router.put('/team/:id', validateJwt, updateTeam)

// DELETE categroy
router.delete('/team/:id', validateJwt, deleteTeam)



module.exports = router
