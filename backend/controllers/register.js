const express = require('express');
const Registration = require('../modals/registerModal'); // Import your Mongoose model

const router = express.Router();

// Route for user registration
app.post('/register', async (req, res) => {
    try {
      const registrationData = req.body;
  
      // Create a new registration entry in the database
      const registration = new Registration(registrationData);
  
      // Save the registration data
      await registration.save();
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;
