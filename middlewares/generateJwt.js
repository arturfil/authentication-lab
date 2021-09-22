const jwt = require('jsonwebtoken')


const generateJwt = (uid) => {
    return new Promise ((resolve, reject) => {
        const data = {uid: uid}
        jwt.sign(data, 'bdfauewhiuherkvehjkesuvhlveuhvseliuh', {
            expiresIn: '2h'
        }, (err, token) => {
            if(err){
                reject("Couldn't generate token")
            }else{
                resolve(token)
            }
        })
    })
}


module.exports = {
    generateJwt
}