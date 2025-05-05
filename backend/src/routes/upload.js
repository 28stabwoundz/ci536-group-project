// Upload routes
const express = require('express');
const router = express.Router();
const { storage } = require('../config/firebase');

// Get a pre-signed URL for uploading CV
router.post('/cv', (req, res) => {
  try {
    const { file_type } = req.body;
    
    if (!file_type) {
      return res.status(400).json({ error: 'File type is required' });
    }

    // Generate a unique file name
    const fileName = `cv_${Date.now()}.${file_type}`;
    
    // Create a reference to the file in Firebase Storage
    const file = storage.file(fileName);
    
    // Generate a signed URL for uploading
    file.getSignedUrl({
      action: 'write',
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      contentType: `application/${file_type}`,
    }).then(signedUrls => {
      res.status(200).json({
        upload_url: signedUrls[0],
        file_id: fileName
      });
    }).catch(error => {
      console.error('Error generating signed URL:', error);
      res.status(500).json({ error: 'Failed to generate upload URL' });
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 