const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // this checks to see if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // this hashes the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // this creates a new user in the database
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // This generates a token
    const jwtSecretKey = process.env.JWT_SECRET_KEY; // Access the secret key from envi
    const token = jwt.sign({ userId: newUser._id }, jwtSecretKey);

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
