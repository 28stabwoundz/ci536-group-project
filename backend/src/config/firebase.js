const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin SDK with service account
const serviceAccount = require('../../../ci536integratedgroupproject-firebase-adminsdk-fbsvc-5242b5c73e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'ci536integratedgroupproject.appspot.com'
});

const db = admin.firestore();
const storage = admin.storage().bucket();

module.exports = {
  admin,
  db,
  storage
}; 