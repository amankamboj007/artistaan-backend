const bcrypt = require('bcrypt')
const config = require('../config/config')

const generateRandom = (length) => {
    let reqLen = Math.pow(10, (length - 1));
    return Math.round(reqLen + (Math.random() * reqLen * 9));
}

const encryptPassword = (password) => {
    return bcrypt.hash(password, parseInt(config.saltRound))
}

const verifyPassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}
module.exports = {
    generateRandom,
    encryptPassword,
    verifyPassword
}