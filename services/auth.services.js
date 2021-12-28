const userModel = require('../models/userModel')
const { generateRandom, encryptPassword, verifyPassword } = require('../helper/helperFunctions')
const { generateAccessToken } = require('../middlewares/jwt.token.handler')
const { Message } = require('../helper/constants')
const _ = require('lodash')

const signUp = async (req) => {
    req.password = await encryptPassword(req.password)
    return userModel.create(req)
}

const login = async (req) => {
    let userDetail = await userModel.findOne({ email: req.email }).lean()
    if (!userDetail) {
        throw Message.userNotExists
    }
    let verifyPass = await verifyPassword(req.password, userDetail.password)
    if (!verifyPass) {
        throw Message.invalidPass
    }
    if (!userDetail.isVerified) {
        userDetail.otp = {
            value: generateRandom(4),
            otpExpiry: Date.now() + 120000 // 2min
        }
        await userModel.findOneAndUpdate({ _id: userDetail._id }, { $set: userDetail })
    }
    userDetail.token = generateAccessToken({ _id: userDetail._id, userRole: userDetail.userRole })
    userDetail = _.omit(userDetail, ['password'])
    return userDetail;
}
module.exports = {
    signUp,
    login
}