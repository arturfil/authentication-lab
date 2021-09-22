const jwt = require('jsonwebtoken')


exports.generateJwt = (uid) => {
  return new Promise((resolve, reject) => {
    const data = {uid}
    jwt.sign(data, 'dfjoifaisjdffda1234123', {
      expiresIn: '4h'
    }, (err, token) => {
      if (err) {
        reject('Could not genearte token');
      } else {
        resolve(token);
      }
    })
  })
}