const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true, // Remove leading/trailing whitespace
    lowercase: true, // Store email addresses in lowercase
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
