const SoccerPlayer = require('../models/SoccerPlayer')

const getAllPlayers = async (req, res) => {
  const players = await SoccerPlayer.find().populate("users", "name");
  try {
    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).json({message: "Server Error"});
  }
}

const getPlayerById = async (req, res) => {
  const { id } = req.params;
  const player = await SoccerPlayer.findById(id);
  try {
    return res.status(200).json(player);
  } catch (error) {
    return res.status(400).json({message: "User not found"});
  }
}

const createPlayer = async (req, res) => {
  const player = await SoccerPlayer.create(req.body);
  try {
    return res.status(201).json(player);
  } catch (error) {
    return res.status(500).json({message: "Coudn't create the player"})
  }
}

const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const player = await SoccerPlayer.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(player);
  } catch (error) {
    return res.status(500).json({message: "Cound't update player"});
  }
}

const deletePlayer = async (req, res) => {
  const { id } = req.params;
  await SoccerPlayer.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Successfully Deleted The player"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete the player"});
  }
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
}