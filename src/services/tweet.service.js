const tweetModel = require("../models/tweet.model")

const allTweet = async () => {
    let tweets = await tweetModel.find()

    return tweets
}

const getTweet = async (id) => {
    let tweet = await tweetModel.findOne({_id : id})

    return tweet
} 

const getTweetByUser = async (id) => {
    let tweets = await tweetModel.find({user_id : id})

    return tweets
}

const createTweet = async (id, params) => {
    params.user_id = id
    
    let tweet = await tweetModel.create(params)

    await tweet.save()

    return tweet
}

const deleteTweet = async (user_id, id) => {
    const result = await tweetModel.deleteOne({user_id, _id : id})

    if(!result) throw new Error("Tweet not found");

    return true
    
}

const tweetService = {
    allTweet,
    getTweetByUser,
    createTweet,
    getTweet,
    deleteTweet
}

module.exports = tweetService