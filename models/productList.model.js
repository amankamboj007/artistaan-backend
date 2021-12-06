const mongoose = require('mongoose')

const productList = mongoose.Schema({
    photoURL: {
        type: String
    }
})

module.exports = mongoose.model("product", productList, "product")