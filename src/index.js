const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const validationErrorHandler = require("./middleware/validateErrorHandler");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

// ------------------------------------------------
// Use middlewares
// ------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------------------
// Use routes
// ----------------------------------
app.use("/", routes);

// ----------------------------------
// Validation error
// ----------------------------------
app.use("/", validationErrorHandler);

// ------------------------------------------
// Register the error handling middleware
// ------------------------------------------
app.use(errorHandler);

// --------------------------------------------------
// Run server
// --------------------------------------------------
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
