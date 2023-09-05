
// This function checks if there is a 'user' property in the request object (req).
function authenticationMiddleware(req, res, next) {
  // If there is no 'user' property in req, it indicates authentication failure.
  // Respond to the client with a 401 (Unauthorized) status and a JSON error message.
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // If authentication is successful, call the 'next' function to proceed to the next middleware or route handler.
  next(); // Continue to the next middleware/route handler if authenticated
}

// Export the authenticationMiddleware function so that it can be used elsewhere in the application.
module.exports = authenticationMiddleware;

