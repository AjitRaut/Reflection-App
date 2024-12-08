const express = require("express");
const router = express.Router();
const { createFeedback, submitFeedback, getFeedbacks } = require("../controllers/feedbackController");
const { protect } = require("../middleware/authMiddleware");

router.post("/create-feedback", protect, createFeedback);
router.post("/submit-feedback", submitFeedback); 
router.get("/get-feedbacks", protect, getFeedbacks); 

module.exports = router;
