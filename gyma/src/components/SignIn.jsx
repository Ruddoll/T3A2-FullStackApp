import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signinUser } from './gyma-backend/src/api.js';

// Creates a class based component named SignIn
class SignIn extends Component {
  constructor(props) {
    super(props);

    // Initializes the component state in order to store user input and messages
    this.state = {
      email: '',                 
      password: '',               
      errorMessage: '',           
      successMessage: '',         
    };
  }

  // Function which is to update component state when the input fields change
  onInputChange = (event) => {
    // Dynamically update the state based on the input fields id
    this.setState({
      [event.target.id]: event.target.value, // Update the state with the input value
    });
  };

  // a function created to handle form submission
  onFormSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Destructure values from the component state
    const { email, password } = this.state;

    try {
      // Calls the created signinUser function from the api services
      const response = await signinUser(email, password);

      if (response.success) {
        // If the users login is successful, update success message
        this.setState({
          successMessage: 'Login successful',
          errorMessage: '', // clears any previos messages 
        });
      } else {
        // If login fails then this updates error message
        this.setState({
          errorMessage: response.message,
          successMessage: '', // clears any previous success message, same as the previous one
        });
      }
    } catch (error) {
      console.error('Error:', error); // Logs any of the errors to the console
    }
  };

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.onFormSubmit}>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onInputChange} // this calls onInputChange function on change
            />
          </div>

          {/* Password input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onInputChange} // same as line 69
            />
          </div>

          {/* Error and success messages */}
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          {this.state.successMessage && <p>{this.state.successMessage}</p>}

          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            Log In
          </button>

          {/* Registration link */}
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
