const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  feedbackLink: { type: String, required: true },
  responses: [{ type: String }], 
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
