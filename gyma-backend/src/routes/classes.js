const express = require('express');
const router = express.Router();

// Sample data: replace this with actual data from your database
const classes = [
  { id: 1, name: 'Yoga', capacity: 20 },
  { id: 2, name: 'Zumba', capacity: 25 },
  // ...
];

// Get available classes
router.get('/available', (req, res) => {
  // Fetch available classes from your database
  // For now, using the sample data
  const availableClasses = classes.filter((cls) => cls.capacity > 0);
  res.json(availableClasses);
});

// Book a class
router.post('/book', (req, res) => {
  const { classId } = req.body;

  // Implement booking logic here
  // Decrement class capacity and associate booking with user

  res.json({ message: 'Class booked successfully' });
});

// Cancel a booked class
router.post('/cancel', (req, res) => {
  const { classId } = req.body;

  // Implement cancelation logic here
  // Increment class capacity and remove booking from user

  res.json({ message: 'Class booking canceled' });
});

module.exports = router;