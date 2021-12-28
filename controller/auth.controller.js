const { sendResponse } = require('../helper/responseHandler')
const { httpStatus, Message } = require('../helper/constants')
const authService = require('../services/auth.services')
const { generateAccessToken } = require('../middlewares/jwt.token.handler')

const signUp = async (req, res) => {
    try {
        req.body.userRole = 1
        let resp = await authService.signUp(req.body)
        sendResponse(res, httpStatus.success, Message.userAdded, resp)
    } catch (error) {
        sendResponse(res, httpStatus.badrequest, Message.errorInAdding, error)
    }
}
const login = async (req, res) => {
    try {
        let resp = await authService.login(req.body)
        sendResponse(res, httpStatus.success, Message.userAdded, resp)
    } catch (error) {
        sendResponse(res, httpStatus.badrequest, Message.errorInAdding, error)
    }
}


module.exports = {
    signUp,
    login
}