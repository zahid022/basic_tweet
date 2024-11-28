const userModel = require("../models/user.model")
const bcrypt = require("bcrypt");
const { encodePayload } = require("../utils/jwt.util");

const register = async (params) => {
    let exsistUser = await userModel.findOne({
        $or : [
            {
                username : params.username
            },
            {
                email : params.email
            }
        ]
    })

    if(exsistUser) throw new Error("username or email is already exists");
    
    let user = await userModel.create(params)

    await user.save()

    return user
}

const login = async (params) => {
    let user = await userModel.findOne({
        username : params.username
    })

    if(!user) throw new Error("Username or password is not valid");

    let checkPassword = await bcrypt.compare(params.password, user.password)

    if(!checkPassword) throw new Error("Username or password is not valid");
    
    let token = encodePayload({userId : user._id})

    return {token, user}
}

const authService = {
    register,
    login
}

module.exports = authService