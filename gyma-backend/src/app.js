require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const classesRoutes = require('./server/routes/classes');
const progressRoutes = require('./server/routes/progress');
const registerRoutes = require('./server/routes/register');
const loginRoutes = require('./server/routes/signin');
const loggingMiddleware = require('./middleware/loggingMiddleware.js');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');

// Middleware
app.use(cors());
app.use(express.json());
app.use(require('express-session')({ // Add session middleware
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(loggingMiddleware);
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session()); // Use Passport for session management

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Connected to MongoDB Atlas!' });
});

// Define a route for user sign-in
app.post('/api/signin', passport.authenticate('local', {
  successRedirect: '/protected', 
  failureRedirect: '/signin', 
  failureFlash: true,
}));

// Protected route
app.get('/protected', authenticationMiddleware, (req, res) => {
  res.send('This is a protected route.');
});

// Routes
app.use('/api/classes', classesRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/signin', loginRoutes);

// Catch all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default App;

