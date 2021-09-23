const {validationResult} = require('express-validator');

exports.validateFields = (req, res, next) => {
  const error = validationResult(req)
  if(!error.isEmpty()){
    return res.status(400).json(error)
  }
  next();
}