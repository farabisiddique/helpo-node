const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/helpoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cors = require('cors');
app.use(cors());


const User = require('./User'); // import User model

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({error});
  }
});


const jwt = require('jsonwebtoken');

// Login route
app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

