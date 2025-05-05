# 🧠 PLANNING.md

## 🎯 Project Name
**Prison Jobs Platform (Alcatraz Inc.)**

## 📘 Project Purpose
To build a secure, cloud-hosted job-matching platform for incarcerated individuals. The system connects job seekers with relevant prison-based roles, allowing job discovery, resume submission, automated scoring, and admin oversight.

## 🧱 Architecture

| Layer       | Tech                             |
|-------------|----------------------------------|
| Frontend    | React.js (Vite, port 3001-3004)  |
| Backend     | Node.js + Express.js (port 5001) |
| Database    | SQLite (development)             |
| Storage     | Local file storage for CVs       |
| Auth        | JWT-based w/ role middleware     |
| Hosting     | Local development                |
| CI/CD       | Planned for future deployment    |
| Emails      | Planned (SendGrid or Amazon SES) |

## 👤 User Roles

| Role        | Permissions                                           |
|-------------|--------------------------------------------------------|
| Job Seeker  | Register, login, complete questionnaire, apply for jobs |
| Recruiter   | Post jobs, view applicants, review resumes              |
| Admin       | Approve/reject jobs, manage users, view stats           |

## 🧩 Feature Modules

| Feature                        | Description                                              | Status        |
|-------------------------------|----------------------------------------------------------|---------------|
| Authentication                | JWT login, role management, protected routes             | ✅ Complete    |
| Questionnaire & Matching      | Skill assessment + rule-based job recommendation         | ✅ Complete    |
| Job Search & Filtering        | Search by title/category/location with pagination        | ✅ Complete    |
| Applications & CV Submission  | Apply with resume, track status                          | ✅ Complete    |
| Resume Parsing & Scoring      | Extract skills, rank candidates by match score           | 🟡 In Progress |
| Admin Dashboard & Reporting   | Job approvals, user stats, system analytics              | 🟡 In Progress |

## 📎 Integration Points

- All features use RESTful APIs.
- Frontend consumes all documented endpoints via `/api` prefix
- CV uploads directly to backend server and are stored locally
- Direct file access through `/uploads` static file serving
- Admin dashboard planned as read-only for security

## 🚫 Out of Scope

- Real-time features (chat, notifications)
- In-app messaging
- Complex ML-based scoring
- Native mobile apps

## 📌 Dev Guidelines

- One feature per developer
- All React components must use .jsx extension for Vite compatibility
- Use mock API responses until backend is ready
- Docs: Keep `TASK.md` and `README.md` updated
- Backend runs on port 5001, frontend on port 3001/3002

## 📅 Project Roadmap

### Sprint 1: Core Infrastructure (Completed)
**Goal**: Set up project scaffolding and core architecture
- ✅ Initialize React frontend and Express backend
- ✅ Set up local file storage for CV uploads
- ✅ Create documentation structure
- ✅ Implement initial UI components
- ✅ Set up CV upload flow
- ✅ Convert all .js components to .jsx
- ✅ Fix port configuration and environment variables

### Sprint 2: Database & Authentication (Completed)
**Goal**: Implement database and proper authentication
- ✅ Implement SQLite database connection (replacing PostgreSQL for development)
- ✅ Set up ORM models and migrations
- ✅ Implement actual JWT authentication
- ✅ Add role-based middleware
- ✅ Connect frontend auth forms to backend
- ✅ Create user profile management
- ✅ Seed database with initial data

### Sprint 3: Job Search & Applications (Completed)
**Goal**: Complete job listing and application features
- ✅ Implement job search with filters
- ✅ Add pagination to results
- ✅ Complete questionnaire UI and matching
- ✅ Enhance job detail pages
- ✅ Build application history view
- ✅ Add application status updates
- ✅ Implement recruiter job management

### Sprint 4: Resume Parsing & Admin (Current)
**Goal**: Add advanced features and admin capabilities
- 🟡 Implement basic resume parsing
- 🟡 Build candidate scoring mechanism
- 🟡 Create skill extraction from CVs
- 🟡 Build admin dashboard
- 🟡 Add job approval workflow
- 🟡 Implement system statistics
- 🟡 Add user management for admins

### Sprint 5: Cloud Deployment (Future)
**Goal**: Deploy application to production environment
- ❌ Set up cloud PostgreSQL instance
- ❌ Deploy backend to Render
- ❌ Deploy frontend to Vercel
- ❌ Configure CI/CD pipeline
- ❌ Implement monitoring and logging
- ❌ Set up database backups
- ❌ Conduct performance testing 