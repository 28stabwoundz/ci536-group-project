# 👥 FEATURE_OWNERS.md

This file assigns responsibilities across the six main features and tracks progress.

| Feature                                | Owner       | Status       | Notes                                  |
|----------------------------------------|-------------|--------------|----------------------------------------|
| 1. User Authentication & Role Mgmt     | [Member 1]  | 🟡 In Progress | JWT, register/login, role middleware   |
| 2. Questionnaire & Job Matching        | [Member 2]  | 🟡 In Progress | UI, storage, matching logic            |
| 3. Job Search & Filtering              | [Member 3]  | ❌ Not Started | Frontend filters, pagination, API hook |
| 4. Job Applications & Resume Upload    | [Member 4]  | 🟡 In Progress | CV upload flow, apply form             |
| 5. Resume Parsing & Applicant Scoring  | [Member 5]  | ❌ Not Started | Parser logic, scoring function         |
| 6. Admin Dashboard & Reporting         | [Member 6]  | ❌ Not Started | UI, stats, approval system             |

> ✅ = Complete, 🟡 = In Progress, ❌ = Not Started

## 📌 Checklist Per Feature

Each owner should:
- Implement frontend + backend (where needed)
- Connect API endpoints as per contract
- Test logic with mock data
- Document API usage in `/docs/API_CONTRACTS.md`
- Mark task status in `/docs/TASK.md` 