const router = require('express').Router()
const userController = require('../controller/user.controller')
const { validateRequest } = require('../middlewares/schema.validators')
const userSchemaValidations = require('../schemaValidations/userSchemaValidator')
const { verifyAccessToken } = require('../middlewares/jwt.token.handler')

router.post('/', validateRequest(userSchemaValidations.adduser), userController.adduser)
router.get('/', verifyAccessToken, userController.userList)
router.get('/products',verifyAccessToken, userController.getProducts)
// router.post('/addurl', userController.addproduct)


module.exports = router