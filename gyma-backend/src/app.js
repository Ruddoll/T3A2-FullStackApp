const express = require('express');
const cors = require('cors');
const app = express();
const classesRoutes = require('./routes/classes');
const progressRoutes = require('./routes/progress');

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Connected to MongoDB Atlas!' });
});

// Routes
const routes = require('./routes'); // Create this file later
app.use('/api', routes);
app.use('/api/classes', classesRoutes);
app.use('/api/progress', progressRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});