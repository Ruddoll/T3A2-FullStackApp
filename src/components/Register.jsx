import React, { Component } from 'react';
import { registerUser } from '../services/api'; // Import registerUser function

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Passwords don't match",
        successMessage: ''
      });
    } else {
      try {
        const response = await registerUser({ email, password }); // Use registerUser function

        if (response.success) {
          this.setState({
            successMessage: 'Registration successful',
            errorMessage: ''
          });
        } else {
          this.setState({
            errorMessage: response.message,
            successMessage: ''
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
              onChange={this.onInputChange}
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
              onChange={this.onInputChange}
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
              onChange={this.onInputChange}
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
