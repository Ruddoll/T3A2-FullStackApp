const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// This is a route for user login
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Finds the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compares the passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generates a token
    const token = jwt.sign({ userId: user._id }, 'secretkey123');

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
