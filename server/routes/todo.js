const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware/auth');
const { Todo } = require('../db/index');

const router = express.Router();

router.post('/todos', authenticateJwt, async (req, res) => {
    const { title, description } = req.body;
    const done = false;
    const userId = req.userId;

    const newTodo = new Todo({ title, description, done, userId });
    
})