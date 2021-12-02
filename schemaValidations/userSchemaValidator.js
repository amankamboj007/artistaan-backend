const Joi = require('@hapi/joi');
const { getErrors } = require('../helper/error.functions')

const userSchemaValidations = {
    adduser: Joi.object().keys({
        name: Joi.string().required().error(getErrors),
        email: Joi.string().required().regex(/^([a-zA-Z0-9_\+\-\.]+)@([a-zA-Z0-9_\[\]\-\.]+)\.([a-zA-Z0-9_\[\]\-\.]+)$/).error(getErrors),
        password: Joi.string().required().error(getErrors),
        phone: Joi.number().error(getErrors)

    })
}

module.exports = userSchemaValidations