# Security Setup Instructions

## Local Environment Setup

We've transitioned from Firebase Storage to a local file storage solution. This simplifies the setup process and eliminates the need for external service credentials.

1. Create a `.env` file in the `backend` directory with the following content:

```
# Server Configuration
PORT=5001
NODE_ENV=development  # 'development' or 'production'

# Database Configuration (SQLite for development)
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
RESET_DB=false  # Set to 'true' to reset the database on server start (caution: data will be lost)

# JWT Configuration
JWT_SECRET=your_jwt_secret_here  # Change this in production!
JWT_EXPIRES_IN=24h  # Token expiration time

# API Configuration
API_VERSION=v1
API_PREFIX=/api
```

2. Make sure the `.env` file is included in your `.gitignore` file to prevent accidental commits

3. Ensure the `backend/uploads` directory exists for storing uploaded files:
```bash
mkdir -p backend/uploads
```

## Security Best Practices

1. **Never commit sensitive credentials** to version control
2. Use environment variables for sensitive information
3. Implement proper file upload validations (file type, size limits)
4. Apply appropriate access controls for uploaded files
5. In production, consider using more robust storage solutions with backup capabilities

## Local File Storage

The application now uses a local file storage approach for handling CV uploads:
1. Files are uploaded directly to the backend server
2. Files are stored in the `backend/uploads` directory
3. Files are served as static assets from the `/uploads` URL path

This approach is simpler and doesn't require external service credentials, making it easier for developers to set up and use the application. 