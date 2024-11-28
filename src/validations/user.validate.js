const Joi = require("joi")

const registerValidate = Joi.object({
    username : Joi.string().min(3).max(15).alphanum().required(),
    email : Joi.string().email().required(),
    password: Joi.string().min(8).max(20).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+]+$')).required()
})

const loginValidate =  Joi.object({
    username : Joi.string().min(3).max(15).alphanum().required(),
    password: Joi.string().min(8).max(20).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+]+$')).required()
})

const userValidate = {
    registerValidate,
    loginValidate
}

module.exports = userValidate