const express = require('express')
const config = require("./src/config")
require("./src/config/database")
const cors = require('cors')
const router = require('./src/routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", router)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.port, () => console.log(`app listening on port ${config.port}!`))