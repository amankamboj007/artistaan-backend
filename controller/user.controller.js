const userService = require('../services/user.services')


const adduser = async (req, res) => {

    res.send(req.body)
}



module.exports = {
    adduser
}