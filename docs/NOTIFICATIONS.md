# 📬 NOTIFICATIONS.md

This file outlines how system notifications will be handled via email and dashboard.

## 📦 Notification Types

| Trigger Event                    | Recipient       | Message Type        | Delivery Method      |
|----------------------------------|------------------|----------------------|-----------------------|
| Job application submitted        | Job Seeker       | Confirmation         | Email + Dashboard     |
| Application reviewed             | Job Seeker       | Status Update        | Email                 |
| Interview scheduled              | Job Seeker       | Reminder             | Email                 |
| Job post approved/rejected       | Recruiter        | Approval Notice      | Email                 |

## 🛠 Email Delivery System

### ✅ Chosen Services
- **Primary**: SendGrid or Amazon SES (via backend SDK or REST API)
- **Fallback**: SMTP-compatible fallback (e.g., Mailgun)

### 🔐 Authentication
- Use API key in backend `.env`:
  ```env
  EMAIL_API_KEY=your_api_key
  ```

## 📮 API Endpoint Design

### `POST /notifications/email`
Sends an email to a specific user.

```json
Request:
{
  "user_id": 1,
  "email_type": "application_submitted",
  "message": "Thank you for applying to Security Officer. Your application is under review."
}

Response:
{
  "status": "sent"
}
```

## 🔔 In-Dashboard Notifications (Optional)

```json
{
  "user_id": 1,
  "message": "Your application was viewed by the recruiter.",
  "seen": false,
  "type": "info"
}
```

This can be shown in a user dashboard as a list of messages with timestamps.

## ✅ To-Do:
1. Choose email provider (SendGrid / SES)
2. Add `/notifications/email` route
3. Store dashboard messages in DB (optional)
4. Add toggle for notification preferences in profile page 