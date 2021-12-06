const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    isActive: {
        type: String,
        default: true
    },
    userRole: {
        type: Number                            // 1-user 2- seller 3- Admin
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    }
})

module.exports = mongoose.model("users", userSchema, "users")