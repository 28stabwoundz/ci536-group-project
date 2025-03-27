// Questionnaire routes
const express = require('express');
const router = express.Router();

// Get questionnaire questions
router.get('/questions', (req, res) => {
  res.json({ message: 'Get questionnaire questions endpoint' });
});

// Submit questionnaire answers
router.post('/submit', (req, res) => {
  res.json({ message: 'Submit questionnaire answers endpoint' });
});

module.exports = router; 