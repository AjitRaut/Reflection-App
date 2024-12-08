const Feedback = require('../models/Feedback');

const createFeedback = async (req, res) => {
  try {
    const { feedbackName } = req.body;

    if (!feedbackName) {
      return res.status(400).json({ error: 'Feedback name is required.' });
    }

    const feedbackLink = `http://localhost:5173/feedback/${feedbackName.replace(/\s+/g, '-')}`;

    const feedback = new Feedback({
      feedbackName,
      feedbackLink,
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback link created successfully!', feedbackLink });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'Feedback link already exists.' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const submitFeedback = async (req, res) => {
  try {
    const { feedbackName, positiveEmotions, improvementAreas, positiveFeedback, improvementFeedback } = req.body;

    if (!feedbackName) {
      return res.status(400).json({ error: 'Feedback name is required.' });
    }

    if (!positiveEmotions.length && !improvementAreas.length) {
      return res.status(400).json({ error: 'At least one option must be selected.' });
    }

    const feedback = await Feedback.findOne({ feedbackName });
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found.' });
    }

    feedback.positiveEmotions = positiveEmotions;
    feedback.improvementAreas = improvementAreas;
    feedback.positiveFeedback = positiveFeedback;
    feedback.improvementFeedback = improvementFeedback;

    await feedback.save();

    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createFeedback,
  submitFeedback,
  getFeedbacks,
};
