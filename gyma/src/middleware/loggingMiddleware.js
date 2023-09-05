// This function logs the request method and URL to the console.
function loggingMiddleware(req, res, next) {
  // Create a log message with the current date and time, request method as well as the URL.
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Calls the 'next' function to proceed to the next middleware or route handler.
  next(); // Continue to the next middleware/route handler
}

// Export the loggingMiddleware function so that it can be used elsewhere in the application.
module.exports = loggingMiddleware;
