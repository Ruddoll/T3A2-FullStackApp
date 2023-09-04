import axios from 'axios';

// Define the base URL for your API
const baseURL = process.env.REACT_APP_API_URL; // Use environment variable

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to log in a user
export const signinUser = async (email, password) => {
  try {
    const response = await api.post('/api/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
