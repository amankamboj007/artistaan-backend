const Joi = require('@hapi/joi');
const { getErrors } = require('../helper/error.functions')

const authSchemaValidtor = {
    adduser: Joi.object().keys({
        name: Joi.string().required().error(getErrors),
        email: Joi.string().required().regex(/^([a-zA-Z0-9_\+\-\.]+)@([a-zA-Z0-9_\[\]\-\.]+)\.([a-zA-Z0-9_\[\]\-\.]+)$/).error(getErrors),
        password: Joi.string().required().error(getErrors),
        phone: Joi.number().error(getErrors)
    }),
    login: Joi.object().keys({
        email: Joi.string().required().regex(/^([a-zA-Z0-9_\+\-\.]+)@([a-zA-Z0-9_\[\]\-\.]+)\.([a-zA-Z0-9_\[\]\-\.]+)$/).error(getErrors),
        password: Joi.string().required().error(getErrors)
    })
}

module.exports = authSchemaValidtor