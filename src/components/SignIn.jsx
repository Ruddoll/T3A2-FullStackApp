import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signinUser } from '../services/api';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
  
    const { email, password } = this.state;
  
    try {
      const response = await signinUser(email, password); // Use loginUser function
  
      if (response.success) {
        this.setState({
          successMessage: 'Login successful',
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
  };

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.onFormSubmit}>
          {/* The email input */}
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

          {/* The password input */}
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
