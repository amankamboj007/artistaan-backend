const router = require('express').Router()
const userController = require('../controller/user.controller')
const { validateRequest } = require('../middlewares/schema.validators')
const userSchemaValidations = require('../schemaValidations/userSchemaValidator')

router.post('/', validateRequest(userSchemaValidations.adduser), userController.adduser)


module.exports = router