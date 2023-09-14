const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must fill in title!"],
        minLength: [2, "Must be at least 2 character!"]
    },
    price: {
        type: Number,
        required: [true, "Must give Price!"],
    },
    description: {
        type: String,
        required: [true, "Must fill in description!"],
        minLength: [2, "Must be at least 2 character!"]
    }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema)
