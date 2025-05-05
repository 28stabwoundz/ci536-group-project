# 📬 NOTIFICATIONS.md

This file outlines how system notifications will be handled via email and dashboard in future phases of the project.

## 📧 Notification Types (Future Implementation)

| Trigger Event                    | Recipient       | Message Type        | Delivery Method      | Status |
|----------------------------------|------------------|----------------------|-----------------------|--------|
| Job application submitted        | Job Seeker       | Confirmation         | Email + Dashboard     | 🔮 Planned |
| Application reviewed             | Job Seeker       | Status Update        | Email                 | 🔮 Planned |
| Interview scheduled              | Job Seeker       | Reminder             | Email                 | 🔮 Planned |
| Job post approved/rejected       | Recruiter        | Approval Notice      | Email                 | 🔮 Planned |

## 🛠 Email Delivery System

### 📌 Planned Services
- **Primary**: SendGrid or Amazon SES (via backend SDK or REST API)
- **Fallback**: SMTP-compatible fallback (e.g., Mailgun)
- **Current Status**: Not implemented in the current phase

### 🔐 Authentication
- Will use API key in backend `.env`:
  ```env
  EMAIL_API_KEY=your_api_key
  ```

## 📮 API Endpoint Design (Future Implementation)

### `POST /api/notifications/email`
Will send an email to a specific user.

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

## 🔔 In-Dashboard Notifications (Future Enhancement)

```json
{
  "user_id": 1,
  "message": "Your application was viewed by the recruiter.",
  "seen": false,
  "type": "info"
}
```

This can be shown in a user dashboard as a list of messages with timestamps.

## ✅ Future Implementation Plan:
1. Select email provider (SendGrid / SES)
2. Add `/api/notifications/email` route
3. Create database schema for storing notification preferences
4. Implement notification history in user dashboard
5. Add toggle for notification preferences in user profile

## 📋 Integration with Existing Features
- Application submission will trigger confirmation emails
- Status changes will notify relevant users
- Admin actions will generate appropriate notifications
- User preferences will control notification delivery methods

## 🚨 Implementation Notes
- Notifications are not included in the current MVP phase
- Will be implemented in future project phases
- Current database schema will need to be extended to support notifications 