const express = require('express');
const router = express.Router();
const Class = require('../models/Class');


// Sample data:
const classes = [
  { id: 1, name: 'Yoga', capacity: 20 },
  { id: 2, name: 'Zumba', capacity: 25 },
  // ...
];

// Get available classes
router.get('/available', async (req, res) => {
  try {
    const availableClasses = await Class.find({ capacity: { $gt: 0 } });
    res.json(availableClasses);
  } catch (error) {
    console.error(error); // Log the error message
    res.status(500).json({ error: 'Unable to fetch available classes' });
  }
});

// Book a class
router.post('/book', async (req, res) => {
  const { classId } = req.body;

  try {
    const selectedClass = await Class.findOne({ classID: classId });

    if (!selectedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    if (selectedClass.capacity <= 0) {
      return res.status(400).json({ error: 'Class is full' });
    }

    // Update class capacity
    selectedClass.capacity -= 1;
    await selectedClass.save();

    // Implement booking association with the user
    // Update the user's booked classes

    res.json({ message: 'Class booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to book the class' });
  }
});

// Cancel a booked class
router.post('/cancel', async (req, res) => {
  const { classId } = req.body;

  try {
    const selectedClass = await Class.findOne({ classID: classId });

    if (!selectedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    // Update class capacity
    selectedClass.capacity += 1;
    await selectedClass.save();

    // Implement cancelation logic: Remove booking association from the user

    res.json({ message: 'Class booking canceled' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to cancel the class booking' });
  }
});

module.exports = router;