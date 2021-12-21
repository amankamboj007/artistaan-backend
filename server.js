const express = require('express')
const app = express()
const config = require('./config/config')
const intializeRoutes = require('./routes/index')
const { connectMongo } = require('./dbconfig/dbconfiguration')

app.use(express.json())

connectMongo.then(() => {
    console.log('Mongo DB connected successfully')
}).catch((err) => {
    console.log(`Kuch TOH gad bad hai DB ME ${err}`)
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(config.baseUrl, intializeRoutes)

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`server is Up at ${config.port}`)
})
