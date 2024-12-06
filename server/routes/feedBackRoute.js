const express = require("express");
const {
  createFeedbackLink,
  submitFeedback,
  getFeedbacks,
} = require("../controllers/feedbackController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", protect, createFeedbackLink);
router.post("/submit", submitFeedback);
router.get("/all", protect, getFeedbacks);

module.exports = router;