const userService = require('../services/user.services')
const { sendResponse } = require('../helper/responseHandler')
const { httpStatus, Message } = require('../helper/constants')
const productModel = require('../models/productList.model')

const adduser = async (req, res) => {
    try {
        req.body.userRole = 1
        await userService.adduser(req.body)
        sendResponse(res, httpStatus.success, Message.userAdded, {})

    } catch (error) {
        sendResponse(res, httpStatus.badrequest, Message.errorInAdding, error)

    }
}

const userList = async (req, res) => {
    try {
        let response = await userService.getUsers()
        sendResponse(res, httpStatus.success, Message.userfetched, response)

    } catch (error) {
        sendResponse(res, httpStatus.badrequest, Message.userfetched, error)

    }
}
// const addproduct = async (req, res) => {
//     await productModel.create(req.body)  // TO ADD URLS TEMPRORILY
//     res.send('done').status(200)
// }
const getProducts = async (req, res) => {
    try {
        let arr = [];
        let data = await productModel.find({}, { _id: 0, photoURL: 1 }).lean()
        if (data && data.length > 0) {
            arr = data.map(i => {
                return i.photoURL;
            });
        }
        let finalRes = {
            list: arr
        }
        sendResponse(res, httpStatus.success, Message.listfetched, finalRes.list)
    } catch (error) {
        sendResponse(res, httpStatus.badrequest, error.message || Message.errorListFetch, error)

    }
}

module.exports = {
    adduser,
    userList,
    getProducts
}