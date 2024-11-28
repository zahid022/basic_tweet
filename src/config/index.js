const dotenv = require("dotenv")
const path = require("path")

const envPath = path.join(__dirname, '../../.env')

dotenv.config({path : envPath})

module.exports = {
    port : process.env.PORT,
    database_URL : process.env.DATABASE_URL,
    jwt_secret : process.env.JWT_SECRET
}