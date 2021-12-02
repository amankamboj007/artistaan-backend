const Joi = require('@hapi/joi');

const validateRequest = (schema, requestPart = 'body') => {
    return (req, res, next) => {
        const { error } = schema.validate(req[requestPart])
        if (error) {
            console.log(error)
            res.send(error['details'][0].message).status(400)
        } else {
            next();
        }
    };
}


module.exports = {
    validateRequest
}