const {Router} = require("express")
const tweetController = require("../controllers/tweet.controller")
const loginFunction = require("../middlewares/login.middleware")
const { validateMiddleware } = require("../middlewares/validate.middleware")
const tweetValidate = require("../validations/tweet.validate")

const tweetRouter = Router()

tweetRouter.get("/all", tweetController.allTweet)
tweetRouter.get("/:id", tweetController.getTweet)

tweetRouter.get("/", loginFunction , tweetController.getTweetByUser)
tweetRouter.post("/", loginFunction, validateMiddleware(tweetValidate), tweetController.createTweet)
tweetRouter.delete("/:id",loginFunction, tweetController.deleteTweet)

module.exports = tweetRouter