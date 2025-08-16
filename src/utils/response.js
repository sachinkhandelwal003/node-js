// ---------------------------------------------------------------
// Success response
// ---------------------------------------------------------------

const successResponse = (res, data = {}, message = "", statusCode = 200) => {
  return res
    .status(statusCode)
    .json({ success: true, message: message, data: data });
};

// ---------------------------------------------------------------
// Error response
// ---------------------------------------------------------------

const errorResponse = (
  res,
  message = "Errors! Please correct the following errors and submit again.",
  statusCode = 200,
  error = ""
) => {
  return res
    .status(statusCode)
    .json({ success: false, message: message, errors: error });
};

module.exports = {
  successResponse,
  errorResponse
};
