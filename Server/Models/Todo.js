const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    tasks: String
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel