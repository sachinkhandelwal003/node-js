const express = require("express");
const welcomeMessage = require("../controllers");

const router = express.Router();

// -------------------------------------------
// Welcome message
// -------------------------------------------
router.get('/', welcomeMessage);

// ------------------------
// Export auth routes
// ------------------------
module.exports = router;
