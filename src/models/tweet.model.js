const {Schema, model} = require("mongoose")

const tweetSchema = new Schema({
    tweet : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
}, {timestamps: true})

const tweetModel = model("tweet", tweetSchema)

module.exports = tweetModel