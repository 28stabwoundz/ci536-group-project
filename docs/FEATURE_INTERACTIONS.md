# 🔄 FEATURE_INTERACTIONS.md

This document shows how each feature communicates with others and the APIs it depends on.

| Feature                            | Consumes From             | Provides To               | Method            | Status        |
|------------------------------------|----------------------------|----------------------------|-------------------|---------------|
| Authentication                    | User DB                   | All other features         | REST API (JWT)    | ✅ Complete    |
| Questionnaire & Matching          | User Input, Jobs          | Job Search, Applications   | REST API          | ✅ Complete    |
| Job Search                        | Jobs DB                   | Job Details, Apply Flow    | REST API          | ✅ Complete    |
| Applications                      | Job Search, Auth          | Resume Parser, Admin       | REST API          | ✅ Complete    |
| Resume Parsing                    | Applications (CVs)        | Recruiters/Admin           | REST API          | 🟡 In Progress |
| Admin Dashboard                   | Applications, Users, Jobs | —                          | Read-Only API     | 🟡 In Progress |

## 📌 Interaction Flows

### Authentication Flow ✅
1. User registers or logs in → JWT generated and returned
2. JWT stored in localStorage and included in request headers
3. Protected routes check token validity using middleware
4. Role-based access control enforced for different resources

### Questionnaire & Matching Flow ✅
1. User completes multi-step questionnaire → Answers stored in database
2. Each section validated before proceeding
3. Progress tracked throughout the questionnaire
4. Matching algorithm compares responses to job requirements:
   - General eligibility scores
   - Skills match scores
   - Preference match scores
5. Comprehensive job recommendations displayed with detailed match scores
6. Visual indicators show match strength by category
7. User can update questionnaire and get new recommendations

### Job Search Flow ✅
1. User searches/filters jobs → Backend filters the database
2. Paginated results returned to frontend
3. User selects job → Detailed view displayed
4. Apply button connects to application flow

### Application Flow ✅
1. User selects "Apply" on a job → Application form displayed
2. CV uploaded to local server storage
3. Application submitted with CV file path
4. Application status tracked and displayed to user

### Resume Parsing Flow 🟡
1. CV uploaded during application → Parsing triggered (in development)
2. Skills and experience extracted from document
3. Matching score calculated against job requirements
4. Results available to recruiters reviewing applications

### Admin Dashboard Flow 🟡
1. Admin logs in → Dashboard displayed
2. Job listings can be approved/rejected
3. User management tools available
4. System statistics and reporting available

## 🔐 Auth Implementation

1. JWT generation and validation implemented
2. Token stored in localStorage with expiration handling
3. Protected routes in frontend using `ProtectedRoute` component
4. Role-based middleware restricts access:
   - Job seekers: Can apply to jobs and complete questionnaire
   - Recruiters: Can post and manage jobs
   - Admins: Full system access

## 📋 Questionnaire Implementation

1. Multi-step form with 13 sections based on job categories
2. Three question types supported:
   - Boolean (yes/no) questions
   - Select (single choice) questions
   - Multiselect (multiple choice) questions
3. Section navigation with progress tracking
4. Validation before proceeding to next section
5. Responsive design for all device sizes
6. Results visualization:
   - Overall match score
   - Detailed breakdown by category
   - Interactive job selection
7. Direct application from results page

## 📤 Upload Implementation

1. Frontend directly uploads CV files → `/api/upload/cv`
2. Files stored locally in backend `/uploads` directory
3. File URL path included in `/api/jobs/apply` request
4. Application stored in database with reference to CV file path

## 🔄 Database Interactions

1. SQLite database with Sequelize ORM
2. Models defined for all tables (users, jobs, applications, etc.)
3. Relationships established between models
4. API endpoints use Sequelize for data access
5. Questionnaire responses stored as JSON in the database 