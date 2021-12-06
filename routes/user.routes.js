const router = require('express').Router()
const userController = require('../controller/user.controller')
const { validateRequest } = require('../middlewares/schema.validators')
const userSchemaValidations = require('../schemaValidations/userSchemaValidator')

router.post('/', validateRequest(userSchemaValidations.adduser), userController.adduser)
router.get('/', userController.userList)
router.get('/products', userController.getProducts)
// router.post('/addurl', userController.addproduct)


module.exports = router