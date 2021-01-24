const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
})

module.exports = mongoose.model('Post', postSchema)