const jwt = require('jsonwebtoken');

exports.validateJwt = (req,res, next) => {
  const token = req.header('Authorization');
  if(!token){
    return res.status(400).json({message: "Token not found"});
  } 
  try {
    const {uid} = jwt.verify(token, 'dfjoifaisjdffda1234123');
    req.uid = uid
  } catch (error) {
    res.status(401).json({message: "invalid token"});
  }
  next()
}