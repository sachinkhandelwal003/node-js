const { errorResponse } = require('../utils/response');

// --------------------------------------------------------------
// Error handling
// --------------------------------------------------------------

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';
    return errorResponse(res, errorMessage, statusCode);
};

// ---------------------------
// Export error handler
// ---------------------------
module.exports = errorHandler;
