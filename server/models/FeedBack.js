const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const FeedbackSchema = new mongoose.Schema({
  feedbackLink: { type: String, default: uuidv4 },
  responses: [{ type: String }], 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
