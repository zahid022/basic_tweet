const Joi = require("joi");

const tweetValidate = Joi.object({
    tweet : Joi.string().min(3).required()
})

module.exports = tweetValidate