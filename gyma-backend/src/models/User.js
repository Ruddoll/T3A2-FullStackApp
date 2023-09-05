const mongoose = require('mongoose');

// The schema for the User model will be defined using Mongoose.
const userSchema = new mongoose.Schema({
  // An email field with type String will be defined, which is required and must be unique.
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // A password field with type String which cannot be left empty
  password: {
    type: String,
    required: true,
  },
});

// A User model created based on the defined schema.
const User = mongoose.model('User', userSchema);

// For when the User model needs to be exported for use in other parts of the application.
module.exports = User;
