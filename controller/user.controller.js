const userService = require('../services/user.services')


const adduser = async (req, res) => {
    req.body.userRole = 1
    let resp = await userService.adduser(req.body)
    console.log(resp)
    res.status(200).send('user Added')
}



module.exports = {
    adduser
}