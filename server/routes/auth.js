const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware');
const { User } = require('../db/index');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(user) {
        res.status(403).json({message: 'User already exists'});
    }
    else {
        const newUser = new User({username, password});
        await newUser.save();
        const token = jwt.sign({id: newUser._id}, SECRET, {expiresIn: '1h'});
        res.json({message: 'user created successfully', token});
    }
})


router.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username, password});
    if(user) {
        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: '1h'}); 
        res.json({message: 'user logged in successfully', token});
    } else {
        res.status(403).json({message: 'User not found'}); 
    }
})

router.get('/me', authenticateJwt, async(req, res) => {
    const user = await User.findOne({_id: req.userId});
    if(user) {
        res.json({username: user.username});
    } else {
        res.status(403).json({message: 'user not logged in'})
    }    
})



module.exports = router;