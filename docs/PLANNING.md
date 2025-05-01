# 🧠 PLANNING.md

## 🎯 Project Name
**Prison Jobs Platform (Alcatraz Inc.)**

## 📘 Project Purpose
To build a secure, cloud-hosted job-matching platform for incarcerated individuals. The system connects job seekers with relevant prison-based roles, allowing job discovery, resume submission, automated scoring, and admin oversight.

## 🧱 Architecture

| Layer       | Tech                             |
|-------------|----------------------------------|
| Frontend    | React.js (Vite + Tailwind)       |
| Backend     | Node.js + Express.js             |
| Database    | PostgreSQL (Supabase or RDS)     |
| Storage     | AWS S3 or Firebase for CVs       |
| Auth        | JWT-based w/ role middleware     |
| Hosting     | Vercel (frontend), Render (API)  |
| CI/CD       | GitHub + automatic deployment    |
| Emails      | SendGrid or Amazon SES           |

## 👤 User Roles

| Role        | Permissions                                           |
|-------------|--------------------------------------------------------|
| Job Seeker  | Register, login, complete questionnaire, apply for jobs |
| Recruiter   | Post jobs, view applicants, review resumes              |
| Admin       | Approve/reject jobs, manage users, view stats           |

## 🧩 Feature Modules

| Feature                        | Description                                              |
|-------------------------------|----------------------------------------------------------|
| Authentication                | JWT login, role management, protected routes             |
| Questionnaire & Matching      | Skill assessment + rule-based job recommendation         |
| Job Search & Filtering        | Search by title/category/location with pagination        |
| Applications & CV Submission  | Apply with resume, track status                          |
| Resume Parsing & Scoring      | Extract skills, rank candidates by match score           |
| Admin Dashboard & Reporting   | Job approvals, user stats, system analytics              |

## 📎 Integration Points

- All features use RESTful APIs.
- Frontend consumes only documented endpoints (see `API_CONTRACTS.md`)
- Resume parsing reads uploaded CVs from cloud URLs.
- Admin dashboard is read-only for security.

## 🚫 Out of Scope

- Real-time features (chat, notifications)
- In-app messaging
- Complex ML-based scoring
- Native mobile apps

## 📌 Dev Guidelines

- One feature per developer
- PRs merge into `develop` branch
- Use mock APIs for frontend if backend isn't ready
- Docs: Keep `TASK.md` and `README.md` updated 