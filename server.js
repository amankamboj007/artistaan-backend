const express = require('express')
const app = express()
const config = require('./config/config')
const intializeRoutes = require('./routes/index')

app.use(express.json())

app.use(config.baseUrl, intializeRoutes)

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`server is Up at ${config.port}`)
})
