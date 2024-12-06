const Feedback = require("../models/FeedBack")

const createFeedbackLink = async (req, res) => {
  try {
    const feedback = new Feedback({ createdBy: req.user.id });
    await feedback.save();
    res.status(201).json({ feedbackLink: feedback.feedbackLink });
  } catch (error) {
    res.status(500).json({ message: "Error creating feedback link", error });
  }
};

const submitFeedback = async (req, res) => {
  try {
    const { feedbackLink, response } = req.body;
    const feedback = await Feedback.findOne({ feedbackLink });
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });

    feedback.responses.push(response);
    await feedback.save();
    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};

const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ createdBy: req.user.id });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
};

module.exports = { createFeedbackLink, submitFeedback, getFeedbacks };
