const {Router} = require("express")
const authRouter = require("./auth.route")
const tweetRouter = require("./tweet.route")

const router = Router()

router.use("/auth", authRouter)
router.use("/tweet", tweetRouter)

module.exports = router