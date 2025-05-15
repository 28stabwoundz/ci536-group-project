# API Documentation

## Authentication Endpoints

### Register User
```
POST /api/auth/register
```
Request body:
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "job_seeker" | "recruiter" | "admin"
}
```
Response:
```json
{
  "token": "string",
  "user": {
    "id": "number",
    "name": "string",
    "role": "string"
  }
}
```

### Login
```
POST /api/auth/login
```
Request body:
```json
{
  "email": "string",
  "password": "string"
}
```
Response:
```json
{
  "token": "string",
  "user": {
    "id": "number",
    "name": "string",
    "role": "string"
  }
}
```

### Get Current User
```
GET /api/auth/me
```
Headers:
```
Authorization: Bearer <token>
```
Response:
```json
{
  "user": {
    "id": "number",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}
```

## Jobs Endpoints

### Search Jobs
```
GET /api/jobs/search
```
Query parameters:
- `title` (optional): string
- `category` (optional): string
- `location` (optional): string
- `page` (optional): number (default: 1)
- `limit` (optional): number (default: 10)

Response:
```json
{
  "jobs": [
    {
      "id": "number",
      "title": "string",
      "category": "string",
      "description": "string",
      "requirements": "string",
      "salary": "string",
      "location": "string",
      "postedBy": {
        "name": "string"
      }
    }
  ],
  "pagination": {
    "totalItems": "number",
    "totalPages": "number",
    "currentPage": "number",
    "itemsPerPage": "number"
  }
}
```

### Get Job Details
```
GET /api/jobs/:id
```
Response:
```json
{
  "id": "number",
  "title": "string",
  "category": "string",
  "description": "string",
  "requirements": "string",
  "salary": "string",
  "location": "string",
  "postedBy": {
    "name": "string"
  }
}
```

### Create Job (Recruiter/Admin only)
```
POST /api/jobs
```
Headers:
```
Authorization: Bearer <token>
```
Request body:
```json
{
  "title": "string",
  "category": "string",
  "description": "string",
  "requirements": "string",
  "salary": "string",
  "location": "string"
}
```

### Apply to Job (Job Seeker only)
```
POST /api/jobs/apply
```
Headers:
```
Authorization: Bearer <token>
```
Request body:
```json
{
  "job_id": "number",
  "cv_url": "string",
  "cover_note": "string"
}
```
Response:
```json
{
  "message": "string",
  "application": {
    "id": "number",
    "user_id": "number",
    "job_id": "number",
    "cv_url": "string",
    "cover_note": "string",
    "status": "submitted" | "reviewed" | "rejected" | "interviewing" | "hired"
  }
}
```

## Questionnaire Endpoints

### Submit Questionnaire Answers
```
POST /api/questionnaire/submit
```
Headers:
```
Authorization: Bearer <token>
```
Request body:
```json
{
  "answers": {
    "questionId": "answer"
  }
}
```
Response:
```json
{
  "message": "string",
  "response": {
    "user_id": "number",
    "answers": "object"
  }
}
```

## Error Responses
All endpoints may return the following error responses:

```json
{
  "error": "string"
}
```

Status codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error 