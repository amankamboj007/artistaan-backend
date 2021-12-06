const userModel = require('../models/userModel')


const adduser = (params) => {
    return userModel.create(params)
}
const getUsers = () => {
    return userModel.find({}).lean()
}

module.exports = {
    adduser,
    getUsers
}