const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./modals/db'); // Import your MongoDB connection
const taskRoutes = require('./routes/route'); // Import your routes
const app = express();

app.use(bodyParser.json());

app.use('/api', taskRoutes); // Use the routes with a prefix
// Define your routes for CRUD operations here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
