const mongoose = require("mongoose")
const config = require(".")

mongoose
    .connect(config.database_URL)
    .then(() => console.log("database connected"))
    .catch(() => console.log("database connect failed"))