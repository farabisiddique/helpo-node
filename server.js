const express = require('express');
const app = express();


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newHelpoDB')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
  

app.use(express.json()); // for parsing application/json

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Node.js server is running!');
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
      console.error(error); // Log the error
      res.status(400).send({ message: 'Error creating user', error: error.message });
  }
});

