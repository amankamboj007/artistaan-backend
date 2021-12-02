const userModel = require('../models/userModel')


const adduser = (params) => {
    return userModel.create(params)
}

module.exports = {
    adduser
}