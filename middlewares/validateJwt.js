const jwt = require("jsonwebtoken")

const validateJwt = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({message: "Token not found"})

    }

    try {
        const {uid} = jwt.verify(token, 'bdfauewhiuherkvehjkesuvhlveuhvseliuh')
        req.uid = uid

    } catch(error) {
        res.status(401).json({message: "Inalid token"})
    }
    next()
}

module.exports = {
    validateJwt
}