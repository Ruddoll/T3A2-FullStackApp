const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  classID: Number, // The class for which progress is being tracked
  progress: Number, // Progress value (can be a percentage, points, etc.)
  // ... other fields
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;