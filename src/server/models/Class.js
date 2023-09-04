const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  classID: Number,
  name: String,
  capacity: Number,
  // ... other fields
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;