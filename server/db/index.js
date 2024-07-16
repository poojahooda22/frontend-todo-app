const mongoose = require('mongoose');

//schema for todo

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String
})

const Todo = mongoose.model('Todo', todoSchema);
const User = mongoose.model('User', userSchema);


module.exports = {
    Todo,
    User
}