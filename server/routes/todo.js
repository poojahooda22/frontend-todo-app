const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware');
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

router.patch('/todos/:todoId/done', authenticateJwt, (req, res) => {
  const { todoId } = req.params;
  const userId = req.userId;
  
  Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true }, { new: true })
  .then((updatedTodo) => {
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  })
  .catch((err) => {
    res.status(500).json({ error: 'Failed to update todo'});
  });
});

router.delete('/todos/:todoId', authenticateJwt, async (req, res) => {
  const { todoId } = req.params;
  const userId = req.userId;

  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: todoId, userId });
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});


module.exports = router;