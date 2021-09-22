const SoccerPlayer = require('../models/SoccerPlayer')

const getAllPlayers = async (req, res) => {
  const meetings = await SoccerPlayer.find().populate("users", "name");
  try {
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({message: "Server Error"});
  }
}

const getPlayerById = async (req, res) => {
  const { id } = req.params;
  const meeting = await SoccerPlayer.findById(id);
  try {
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(400).json({message: "User not found"});
  }
}

const createPlayer = async (req, res) => {
  const meeting = await SoccerPlayer.create(req.body);
  try {
    return res.status(201).json(meeting);
  } catch (error) {
    return res.status(500).json({message: "Coudn't create the meeting"})
  }
}

const updatePlayer = async (req, res) => {
  const { id } = req.params;
  const meeting = await SoccerPlayer.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(meeting);
  } catch (error) {
    return res.status(500).json({message: "Cound't update meeting"});
  }
}

const deletePlayer = async (req, res) => {
  const { id } = req.params;
  await SoccerPlayer.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Successfully Deleted The meeting"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete the meeting"});
  }
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
}