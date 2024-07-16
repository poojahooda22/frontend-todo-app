const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware/auth');
const { Todo } = require('../db/index');

const router = express.Router();

router.post('/todos', authenticateJwt, async (req, res) => {
    const { title, description } = req.body;
    const done = false;
    const userId = req.userId;

    const newTodo = new Todo({ title, description, done, userId });

    newTodo.save()
    .then((saveTodo) => {
        res.status(201).json(saveTodo)
    })
    .catch((err) => {
        res.status(500).json({error: 'Failed to create a new todo'})
    });
});

router.get('/todos', authenticateJwt, async(req, res) => {
    const userId = req.userId;

    Todo.find({userId})
    .then((todos) => {
        res.json(todos)
    })
    .catch((err) => {
        res.status(500).json({error: 'Failed to fetch todos'})
    })
});

