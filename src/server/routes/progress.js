const express = require('express');
const router = express.Router();
const Progress = require('../server/models/Progress');

// Route to add progress for a class
router.post('/add', async (req, res) => {
  const { classID, progressValue } = req.body;

  try {
    const newProgress = new Progress({
      classID: classID,
      progress: progressValue,
      // ... other fields
    });

    await newProgress.save();
    res.json({ message: 'Progress added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to add progress' });
  }
});

// Route to get progress for a class
router.get('/:classID', async (req, res) => {
  const classID = req.params.classID;

  try {
    const progress = await Progress.findOne({ classID: classID });
    if (!progress) {
      return res.status(404).json({ error: 'Progress not found' });
    }
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch progress' });
  }
});

module.exports = router;