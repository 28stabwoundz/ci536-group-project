# ✅ TASK.md

This file tracks the overall task progress across all modules.
Use ✅, 🟡, and ❌ to show task status.

## 🔹 Global Setup Tasks

| Task                                       | Status   |
|-------------------------------------------|----------|
| Define database schema                    | ✅ Done   |
| Finalize API contracts                    | ✅ Done   |
| Choose deployment platforms               | ✅ Done   |
| Set up cloud storage plan for CVs         | ✅ Done   |
| Agree on feature ownership                | ✅ Done   |
| Create documentation (API, DB, Planning)  | ✅ Done   |
| Create `/tests` folder & structure        | 🟡 In Progress |
| Deploy PostgreSQL cloud instance          | ❌ Not Started |
| Set up CI for testing on PR               | ❌ Not Started |

## 🔹 Feature Tasks by Area

### 1. Authentication & Role Management
- [x] JWT-based login/signup API
- [ ] Middleware for role-based access
- [ ] Protected route testing
- [ ] Frontend login form
- [ ] Frontend role gating

### 2. Questionnaire & Matching
- [x] Define question schema
- [ ] Multi-step questionnaire UI
- [ ] Submit answers to backend
- [ ] Store responses in DB
- [ ] Implement rule-based matching algorithm
- [ ] Show job recommendations to users

### 3. Job Search & Filtering
- [x] Backend search/filter endpoint
- [ ] Frontend search page with filters
- [ ] Pagination and sorting
- [ ] Job detail page UI

### 4. Applications & Resume Upload
- [x] CV upload endpoint (stubbed)
- [ ] Apply to job UI
- [ ] Upload CV to S3/Firebase from frontend
- [ ] Show application history to users

### 5. Resume Parsing & Scoring
- [ ] Backend parser (basic keyword match)
- [ ] Store parsed data
- [ ] Match score API
- [ ] Frontend recruiter view for rankings

### 6. Admin Dashboard
- [ ] Admin dashboard UI
- [ ] Backend: Approve/reject jobs
- [ ] Backend: Stats endpoint
- [ ] Admin-only access test cases

## 🕵️ Discovered During Work

- [ ] We need mock CVs for parser testing
- [ ] Need way to manually trigger resume parsing for debugging
- [ ] "Reject job" needs a reason field

## 🚧 Active Development Checklist

- [ ] Ensure all new endpoints have basic tests
- [ ] Add all new routes to API documentation
- [ ] Update README.md when setup or dependencies change 