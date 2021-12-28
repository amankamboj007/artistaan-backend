const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateAccessToken = (data) => {
    return jwt.sign(data, config.jwt.secret, config.jwt.option)

}

const verifyAccessToken = (req, res, next) => {
    try {
        let token = req.headers.token
        if (token) {
            let tokenData = decodeToken(token, config.jwt.secret)
            if (tokenData._id) {
                next();
            }
            else {
                res.send('authorization Failed').status(400)
            }
        } else {
            res.send('Invalid Token').status(400)
        }
    } catch (error) {
        res.send(error || 'ERROR').status(401)
    }
}

const decodeToken = (token, secret) => {
    return jwt.verify(token, secret)
}

module.exports = {
    generateAccessToken,
    verifyAccessToken,
    decodeToken
}