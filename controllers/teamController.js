const SoccerTeam = require('../models/SoccerTeam')

const getAllTeams = async (req, res) => {
  const teams = await SoccerTeam.find().populate("players", "name");
  try {
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(500).json({message: "Server Error"});
  }
}

const getTeamById = async (req, res) => {
  const { id } = req.params;
  const team = await SoccerTeam.findById(id);
  try {
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json({message: "User not found"});
  }
}

const createTeam = async (req, res) => {
  const team = await SoccerTeam.create(req.body);
  try {
    return res.status(201).json(team);
  } catch (error) {
    return res.status(500).json({message: "Coudn't create the team"})
  }
}

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const team = await SoccerTeam.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(team);
  } catch (error) {
    return res.status(500).json({message: "Cound't update team"});
  }
}

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  await SoccerTeam.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Successfully Deleted The team"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete the team"});
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
}