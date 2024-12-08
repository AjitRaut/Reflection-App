const express = require('express');
const router = express.Router();
const { createFeedback, submitFeedback, getFeedbacks} = require('../controllers/feedbackController'); 

router.post('/create-feedback', createFeedback);

router.post('/submit-feedback', submitFeedback);

router.get('/get-feedbacks', getFeedbacks);

module.exports = router;
