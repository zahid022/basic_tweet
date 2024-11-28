const {Router} = require("express")
const authController = require("../controllers/auth.controller")
const { validateMiddleware } = require("../middlewares/validate.middleware")
const userValidate = require("../validations/user.validate")

const authRouter = Router()

authRouter.post("/register", validateMiddleware(userValidate.registerValidate), authController.register)
authRouter.post("/login", validateMiddleware(userValidate.loginValidate), authController.login)

module.exports = authRouter