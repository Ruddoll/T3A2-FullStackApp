require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const classesRoutes = require('./routes/classes');
const progressRoutes = require('./routes/progress');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Connected to MongoDB Atlas!' });
});

// Routes
app.use('/api/classes', classesRoutes);
app.use('/api/progress', progressRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});