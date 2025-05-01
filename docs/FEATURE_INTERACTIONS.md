# 🔄 FEATURE_INTERACTIONS.md

This document shows how each feature communicates with others and the APIs it depends on.

| Feature                            | Consumes From             | Provides To               | Method            |
|------------------------------------|----------------------------|----------------------------|-------------------|
| Authentication                    | User DB                   | All other features         | REST API (JWT)    |
| Questionnaire & Matching          | User Input, Jobs          | Job Search, Applications   | REST API          |
| Job Search                        | Jobs DB                   | Job Details, Apply Flow    | REST API          |
| Applications                      | Job Search, Auth          | Resume Parser, Admin       | REST API          |
| Resume Parsing                    | Applications (CVs)        | Recruiters/Admin           | REST API          |
| Admin Dashboard                   | Applications, Users, Jobs | —                          | Read-Only API     |

## 📌 Interaction Examples

- **Apply to Job**:
  - User → Auth → Apply API → Application stored → Resume Parsing triggered

- **Admin Review**:
  - Admin logs in → Hits `/admin/dashboard` → Views jobs + applications + user stats

- **Job Matching**:
  - Questionnaire answers submitted → Matching algorithm compares answers to jobs → Recommendations returned

## 🔐 Auth Flow

1. User logs in → JWT returned
2. JWT required for all protected endpoints
3. Role-based middleware restricts access to:
   - `/admin/*`: Admins only
   - `/resume/score`: Recruiters/Admins only

## 📤 Upload Flow

1. Frontend requests upload URL → `/upload/cv`
2. Upload directly to S3/Firebase
3. Send CV URL in `/jobs/apply` body 