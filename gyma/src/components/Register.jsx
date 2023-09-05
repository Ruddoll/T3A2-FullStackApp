import React, { Component } from 'react';
import { registerUser } from '../services/api';

// This creates a class based component named Register
class Register extends Component {
  constructor(props) {
    super(props);

    // Initializes the component state so it can store user input and messages
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '', 
      successMessage: '', 
    };
  }

  // This function to updates component state when the input fields change
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // Updates the state with the given input value
    });
  };

  // This function handles the form submission
  onFormSubmit = async (event) => {
    event.preventDefault(); 

    // Destructures values from the component state
    const { email, password, confirmPassword } = this.state;

    // Checks to see if the entered passwords match one another
    if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Passwords do not match, try again",
        successMessage: '', // This Makes sure to clear any previous success message
      });
    } else {
      try {
        // Calls the registerUser function from the api services
        const response = await registerUser({ email, password });

        if (response.success) {
          // If the user meets critera and the registration is successful this is the update success message
          this.setState({
            successMessage: 'Registration successful',
            errorMessage: '', // Clears any previous error message
          });
        } else {
          // If they dont meet criteria and the registration fails then update error message
          this.setState({
            errorMessage: response.message,
            successMessage: '', // Does the same as the others and clears any previous success message
          });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.onFormSubmit}>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onInputChange} // Call the onInputChange function when changed
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
              onChange={this.onInputChange} // Calls the onInputChange function on change
            />
          </div>

          {/* Confirm password input */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={this.state.confirmPassword}
              onChange={this.onInputChange} // once again calls onInputChange function on change
            />
          </div>

          {/* Error and success messages */}
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          {this.state.successMessage && <p>{this.state.successMessage}</p>}

          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
