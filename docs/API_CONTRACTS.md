# 🌐 API_CONTRACTS.md

All responses are in JSON. Auth-protected routes require:
```
Authorization: Bearer <jwt_token>
```

All endpoints are prefixed with `/api` in the actual implementation.

## 1. 🧑 User Authentication

### `POST /api/auth/register`
Registers a new user.

```json
Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure123",
  "role": "job_seeker"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "role": "job_seeker"
  }
}
```

### `POST /api/auth/login`
Returns token and user info.

```json
Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "role": "job_seeker"
  }
}
```

## 2. 📋 Questionnaire

### `POST /api/questionnaire/submit`
Saves answers.

```json
Request:
{
  "answers": {
    "1": true,
    "2": false
  }
}
```

### `GET /api/questionnaire/questions`
Returns questionnaire questions.

### `GET /api/questionnaire/results`
Returns matched jobs.

```json
Response:
{
  "jobs": [
    {
      "id": 101,
      "title": "Nurse",
      "match_score": 85
    }
  ]
}
```

## 3. 💼 Job Search

### `GET /api/jobs/search?title=security&location=London`
Returns filtered jobs.

### `GET /api/jobs/:id`
Returns detailed job info.

## 4. 📄 Applications

### `POST /api/upload/cv`
Upload CV file directly to server.

```json
Request:
Content-Type: multipart/form-data
Form data:
- file: [binary file data]

Response:
{
  "message": "File uploaded successfully",
  "file_id": "cv_a1b2c3d4e5.pdf",
  "file_url": "/uploads/cv_a1b2c3d4e5.pdf"
}
```

### `POST /api/jobs/apply`
Submit application.

```json
Request:
{
  "job_id": 201,
  "cv_url": "/uploads/cv_a1b2c3d4e5.pdf",
  "cover_note": "I am interested..."
}
```

## 5. 🧠 Resume Parsing

### `POST /api/resume/parse`
Extracts resume data.

### `GET /api/resume/score/:userId/:jobId`
Returns score and match analysis.

## 6. 🛠 Admin

### `GET /api/admin/dashboard`
Returns system stats.

### `POST /api/admin/jobs/:id/approve`
Approves a job post.

### `GET /api/admin/users`
Returns all users (paginated).

## ❌ Error Format

```json
{
  "error": "Invalid credentials",
  "status_code": 401
}
```

## ⚠️ Implementation Notes

1. All routes are prefixed with `/api` in the actual implementation
2. CV files are stored locally in the `/uploads` directory on the server
3. Frontend must use .jsx extension for components with JSX
4. Backend runs on port 5001, frontend on port 3001/3002
5. Many endpoints are currently stubs returning placeholder data

## 🔮 API Enhancement Plan

### Phase 1: Core Authentication Improvements
1. **Auth Endpoints Enhancement**
   - Add route for `/api/auth/me` to get current user details
   - Add `/api/auth/refresh-token` for JWT refresh
   - Implement `/api/auth/logout` to invalidate tokens

2. **User Management**
   - Add `/api/auth/profile` for user profile updates
   - Implement password reset flow:
     - `/api/auth/forgot-password`
     - `/api/auth/reset-password/:token`

### Phase 2: Job & Application Features
1. **Enhanced Job Operations**
   - Add `/api/jobs` (POST) for creating new jobs
   - Implement `/api/jobs/:id` (PUT/DELETE) for updates/removal
   - Add `/api/jobs/mine` for recruiters to view their posted jobs

2. **Application Tracking**
   - Add `/api/applications/my` for job seeker's applications
   - Create `/api/applications/:id` for application status updates
   - Implement `/api/applications/:id/status` for status changes

### Phase 3: Advanced Features
1. **Enhanced Search**
   - Add full-text search capabilities
   - Implement filters for salary range, experience level
   - Add sorting options (newest, relevance, etc.)

2. **Resume Analysis**
   - Improve resume parsing with keyword extraction
   - Add skills categorization
   - Implement compatibility scoring

3. **Admin Operations**
   - Add user management endpoints
   - Implement reporting features
   - Add configuration management

### Phase 4: API Performance & Security
1. **Rate Limiting**
   - Implement request throttling
   - Add proper error responses for rate limits

2. **Caching Strategy**
   - Add Redis cache for frequent queries
   - Implement cache invalidation

3. **Advanced Security**
   - Add CSRF protection
   - Implement IP-based restrictions for admin routes
   - Add audit logging for sensitive operations 