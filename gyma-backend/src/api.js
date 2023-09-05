import axios from 'axios';

/// due to poor time management and overload of informarion from different online help forums a tutorials had figured that...
//(continuation from line 3) i had issues with desgin my apis accordingly since i pressumed databse issues would be handled by another member, however if there...
/// was a API url done this would of been how it would be utilised


// Define the base URL for the api using an environment variable.
const baseURL = process.env.REACT_APP_API_URL; // URL would be displayed in env 

// Create an Axios instance configured with the base URL.
const api = axios.create({
  baseURL, // Set the base URL to the value defined above.
  headers: {
    'Content-Type': 'application/json', // Set the content type for HTTP requests.
  },
});

// Function to register a user by making a POST request to the /api/register endpoint.
export const registerUser = async (userData) => {
  try {
    // Send a POST request to the /api/register endpoint with the users data.
    const response = await api.post('/api/register', userData);
    
    // Returns the data received from the server.
    return response.data;
  } catch (error) {
    // If an error occurs during the request then it throws the error for handling.
    throw error;
  }
};

// Function to log in a user by making a POST request to the /api/signin endpoint.
export const signinUser = async (email, password) => {
  try {
    // Sends a POST request to the /api/signin endpoint with email and password.
    const response = await api.post('/api/signin', { email, password });
    
    // Return the data received from the server.
    return response.data;
  } catch (error) {
    // If an error occurs during the request then throw the error for handling.
    throw error;
  }
};

