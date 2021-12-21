const router = require('express').Router()
const { validateRequest } = require('../middlewares/schema.validators')
const authSchemaValidtor = require('../schemaValidations/authSchemaValidator')
const authController = require('../controller/auth.controller')

router.post('/signUp', validateRequest(authSchemaValidtor.adduser), authController.signUp)
router.post('/login', validateRequest(authSchemaValidtor.login), authController.login)





module.exports = router