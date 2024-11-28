const jwt = require("jsonwebtoken")
const config = require('../config/index')

const encodePayload = (data) => {
    let token = jwt.sign(data, config.jwt_secret, { expiresIn: "1d" })
    return token
}

const decodePayload = (token) => {
    try {
        let payload = jwt.verify(token, config.jwt_secret)
        return payload
    } catch (err) {
        return false
    }
}

module.exports = {
    encodePayload,
    decodePayload
}