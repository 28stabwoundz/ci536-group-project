# Firebase to Local Storage Migration Guide

## Overview

This guide explains how to transition from using Firebase Storage to a local file storage solution for CV uploads in the application, inspired by the SQL-based approach in the CVpage component.

## Why This Approach?

The existing CVpage implementation uses a straightforward file upload approach that:
1. Directly uploads files to a directory on the server
2. Stores file metadata in a database
3. Requires no external credentials or services

This approach is being implemented across the main application to eliminate Firebase Storage dependency.

## Implementation Steps

### Backend Changes

1. **New Upload Configuration (backend/src/config/upload.js)**
   - Created local file storage utilities
   - Added file handling functions (save, delete)
   - Uses UUID for unique filenames

2. **Modified Upload Routes (backend/src/routes/upload.js)**
   - Added Multer for file upload handling
   - Changed from Firebase upload URLs to direct file uploads
   - Implemented file type validation

3. **Server Configuration (backend/src/index.js)**
   - Added static file serving for the uploads directory
   - Files are now accessible via HTTP

### Frontend Changes

1. **Upload Service (frontend/src/services/uploadService.js)**
   - Changed from getting pre-signed URLs to direct file uploads
   - Uses FormData to send files to the server

2. **CV Upload Component (frontend/src/pages/applications/CVUpload.jsx)**
   - Updated to use the new direct upload method
   - Simplified the upload process

## Setup Instructions

1. Install new dependencies:
```bash
cd backend
npm install multer uuid --save
```

2. Create the uploads directory:
```bash
mkdir -p backend/uploads
```

3. Remove Firebase dependency in your `.env` file. No Firebase credentials are needed.

## How It Works Now

### Upload Process
1. User selects a CV file in the frontend
2. File is sent directly to the backend via a multipart form POST request
3. Backend saves the file to the local filesystem with a unique name
4. The file URL is returned to the frontend
5. Frontend uses this URL when submitting job applications

### Advantages

1. **No External Services** - Everything is self-contained within the application
2. **Simpler Setup** - New developers don't need Firebase credentials
3. **Local Development** - Files are stored locally, making development easier
4. **Consistent with CVpage** - Uses a similar approach to the existing CVpage implementation

## Testing

To test the new implementation:
1. Start the backend server
2. Navigate to the CV upload page in the frontend
3. Upload a test file
4. Verify the file is saved to the backend/uploads directory
5. Verify the file can be accessed via the returned URL

## Reverting (If Needed)

If you need to revert to Firebase Storage:
1. Restore the original files from version control
2. Ensure Firebase credentials are properly configured

## Production Considerations

For production deployment:
1. Ensure the uploads directory has proper permissions
2. Implement appropriate backup strategies
3. Consider storage limitations on your hosting provider 