# Authentication Documentation

## Overview
The application uses JWT (JSON Web Tokens) for authentication and role-based access control.

## User Roles

### Job Seeker
- Register and login
- Complete questionnaire
- Search and view jobs
- Apply to jobs
- View application history

### Recruiter
- Register and login
- Post new jobs
- View job applications
- Review candidate profiles

### Admin
- Register and login
- Approve/reject jobs
- Manage users
- Access system statistics

## Authentication Flow

1. **Registration**
   - User provides name, email, password, and role
   - Password is hashed using bcrypt
   - JWT token is generated and returned

2. **Login**
   - User provides email and password
   - Credentials are verified
   - JWT token is generated and returned

3. **Protected Routes**
   - Token is sent in Authorization header
   - Token is verified on each request
   - Role-based middleware checks permissions

## JWT Token Structure

```javascript
{
  "id": "user_id",
  "email": "user_email",
  "role": "user_role",
  "iat": "issued_at",
  "exp": "expiration_time"
}
```

## Security Measures

1. **Password Security**
   - Passwords are hashed using bcrypt
   - Salt rounds: 10
   - Never stored in plain text

2. **Token Security**
   - Tokens expire after 24 hours
   - Stored in memory (not localStorage)
   - Sent via Authorization header

3. **Role-Based Access**
   - Middleware checks user role
   - Routes are protected by role requirements
   - Admin routes have additional security

## Error Handling

- Invalid credentials: 401 Unauthorized
- Missing token: 401 Unauthorized
- Invalid token: 401 Unauthorized
- Insufficient permissions: 403 Forbidden

## Implementation Details

- JWT secret is stored in environment variables
- Token verification middleware in `backend/src/middleware/auth.js`
- Role-based middleware in `backend/src/middleware/auth.js`
- Authentication routes in `backend/src/routes/auth.js` 