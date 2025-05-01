# 🌐 API_CONTRACTS.md

All responses are in JSON. Auth-protected routes require:
```
Authorization: Bearer <jwt_token>
```

## 1. 🧑 User Authentication

### `POST /auth/register`
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

### `POST /auth/login`
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

### `POST /questionnaire/submit`
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

### `GET /questionnaire/results`
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

### `GET /jobs/search?title=security&location=London`
Returns filtered jobs.

### `GET /jobs/:id`
Returns detailed job info.

## 4. 📄 Applications

### `POST /upload/cv`
Get upload URL.

```json
Request:
{ 
  "file_type": "pdf" 
}

Response:
{
  "upload_url": "https://s3.amazonaws.com/bucket/cv_123.pdf",
  "file_id": "cv_123.pdf"
}
```

### `POST /jobs/apply`
Submit application.

```json
Request:
{
  "job_id": 201,
  "cv_url": "https://s3.amazonaws.com/bucket/cv_123.pdf",
  "cover_note": "I am interested..."
}
```

## 5. 🧠 Resume Parsing

### `POST /resume/parse`
Extracts resume data.

### `GET /resume/score/:userId/:jobId`
Returns score and match analysis.

## 6. 🛠 Admin

### `GET /admin/dashboard`
Returns system stats.

### `POST /admin/jobs/:id/approve`
Approves a job post.

### `GET /admin/users`
Returns all users (paginated).

## ❌ Error Format

```json
{
  "error": "Invalid credentials",
  "status_code": 401
}
``` 