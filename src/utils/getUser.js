const userModel = require("../models/user.model");
const { decodePayload } = require("./jwt.util");

const getUser = async (req) => {
    const authHeader = req.headers.authorization

    if (!authHeader) throw new Error("Unauthorized: No token provided");

    const token = authHeader.split(" ")[1]

    if (!token) throw new Error("Unauthorized: Malformed token");

    let user = decodePayload(token)

    let result = await userModel.findOne({ _id: user.userId })

    if (!result) throw new Error("Unauthorized: Invalid token");

    return result
}

module.exports = getUser