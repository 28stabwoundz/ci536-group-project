// Jobs routes
const express = require('express');
const router = express.Router();

// Search jobs
router.get('/search', (req, res) => {
  res.json({ message: 'Search jobs endpoint' });
});

// Get job details
router.get('/:id', (req, res) => {
  res.json({ message: `Get job ${req.params.id} details endpoint` });
});

module.exports = router; 