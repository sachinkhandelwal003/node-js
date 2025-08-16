const { Request, Response } = require("express");
const axios = require("axios");
const { errorResponse, successResponse } = require("../utils/response");

// -----------------------------------------------
// Welcome messages
// -----------------------------------------------
const welcomeMessage = async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        "model": "gpt-3.5-turbo-1106",
        "messages": [
          {
            "role": "system",
            "content": "Please give me random message for complete signup and welcome."
          },
          {
            "role": "user",
            "content": "Hello!"
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const message = response?.data?.choices[0]?.message?.content.trim();
    return successResponse(res, message, "Welcome Message");
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};

// ---------------------------------
// Export controller
// ---------------------------------
module.exports = welcomeMessage;
