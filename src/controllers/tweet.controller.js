const tweetService = require("../services/tweet.service")
const getUser = require("../utils/getUser")

const allTweet = async (req, res) => {
    try {
        let data = await tweetService.allTweet()
        res.json(data)
    } catch {
        res.status(400).json({ error: "failed" })
    }
}

const getTweet = async (req, res) => {
    const { id } = req.params

    try {
        let data = await tweetService.getTweet(id)

        res.json(data)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

const getTweetByUser = async (req, res) => {
    let { _id } = await getUser(req)
    try {
        let data = await tweetService.getTweetByUser(_id)
        res.json(data)
    } catch {
        res.status(400).json({ error: "failed" })
    }
}

const createTweet = async (req, res) => {
    let { _id } = await getUser(req)
    const { body } = req

    try {
        let result = await tweetService.createTweet(_id, body)
        res.json({
            message: "tweet is created successfully",
            tweet: result
        })
    } catch {
        res.status(400).json({ error: "tweet created failed" })
    }
}

const deleteTweet = async (req, res) => {
    const { _id } = await getUser(req)
    const { id } = req.params

    try {
        await tweetService.deleteTweet(_id, id)
        res.json({message : "tweet is deleted successfully"})
    } catch (err) {
        res.status(404).json({error : "Tweet not found"})
    }
}

const tweetController = {
    allTweet,
    getTweetByUser,
    createTweet,
    getTweet,
    deleteTweet
}

module.exports = tweetController