import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register'; 
import SignIn from './components/SignIn'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/signin" component={SignIn} />
        {/* Add more routes for other pages if needed */}
      </Switch>
    </Router>
  );
}

export default App;


