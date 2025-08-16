const { errorResponse } = require('../utils/response');

const validationErrorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        // Validation error occurred
        const errors = Object.values(err.errors).map(error => error.message);
        return errorResponse(res, 'Validation error', 400, errors);
    }
    next(err);
};

module.exports = validationErrorHandler;
