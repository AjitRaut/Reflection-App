const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedbackName: { type: String, required: true, unique: true },
  feedbackLink: { type: String, required: true },
  positiveEmotions: { type: [String], default: [] ,required: true },  
  improvementAreas: { type: [String], default: [] , required: true },  
  positiveFeedback: { type: String, default: '' },    
  improvementFeedback: { type: String, default: '' }, 
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
