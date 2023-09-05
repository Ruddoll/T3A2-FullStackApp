import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register.jsx'; 
import SignIn from './components/SignIn.jsx'; 

// Defines the main component of the application.
function App() {
  return (
    // Create a router component to manage navigation.
    <Router>
      {/* Use the 'Switch' component to render the first matching route. */}
      <Switch>
        {/* Define a route for the '/register' URL, rendering the 'Register' component. */}
        <Route path="/register" component={Register} />
        
        {/* Define a route for the '/signin' URL, rendering the 'SignIn' component. */}
        <Route path="/signin" component={SignIn} />
        
        {/* 
          with better time management more routes for other pages would have been added as the routes specify which components to render for different URLs.
        */}
      </Switch>
    </Router>
  );
}

// Export the 'App' component as the default export.
export default App;


