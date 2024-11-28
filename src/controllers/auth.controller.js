const authService = require("../services/auth.service")

const register = async (req, res) => {
    const { body } = req

    try {
        let user = await authService.register(body)

        res.json({
            message : "User is successfully created",
            user
        })
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

const login = async (req, res) => {
    const {body} = req
    
    try {
        res.json(await authService.login(body))
    } catch (err) {
        res.status(400).json({error : err.message})
    }
}

const authController = {
    register,
    login
}

module.exports = authController