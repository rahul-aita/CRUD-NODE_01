const express = require('express');
const User = require('../modals/loginModal'); // Import your Mongoose model

const router = express.Router();


app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      // Validate the password (you should use a secure password hashing library)
      if (user.password !== password) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
