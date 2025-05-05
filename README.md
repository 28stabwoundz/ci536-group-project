# Alcatraz Prison Jobs Platform

A job platform for Alcatraz Prison, allowing job seekers to find and apply for positions, and recruiters to post job listings.

## Project Structure

- **Frontend**: React application (port 3001-3006)
- **Backend**: Express API (port 5001)
- **Database**: SQLite for development

## Features

- **User Authentication**: Register, login, and role-based access control
- **Job Listings**: View, search, and filter job postings
- **Questionnaire & Matching**: 
  - Multi-step skills assessment with section-by-section validation
  - Comprehensive job matching algorithm
  - Visual match score breakdown by category
  - Interactive results display 
- **Applications**: Apply to jobs with CV uploads
- **Profile Management**: Manage user profiles and application history
- **Admin Functions**: Approve/reject job listings (admin only)
- **Recruiter Tools**: Post and manage job listings (recruiter only)

## Getting Started

### Prerequisites

- Node.js v14 or higher
- NPM or Yarn

### Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ci536-group-project2
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory:
   ```
   PORT=5001
   NODE_ENV=development
   DB_DIALECT=sqlite
   DB_STORAGE=./database.sqlite
   JWT_SECRET=alcatraz_development_jwt_secret
   JWT_EXPIRES_IN=24h
   RESET_DB=false
   ```

4. Set up the database:
   ```
   cd backend
   npm run setup-db  # Initialize the database
   ```

5. Start the development servers:
   ```
   # Start backend server (from backend directory)
   npm run dev

   # Start frontend server (from frontend directory, in a separate terminal)
   cd ../frontend
   npm run dev
   ```

6. Access the application:
   - Frontend: The console will display the URL (usually http://localhost:3001)
   - Backend API: http://localhost:5001

## Sample Users

The database is seeded with the following users for testing:

| Email                 | Password    | Role      |
|-----------------------|-------------|-----------|
| admin@alcatraz.com    | password123 | admin     |
| recruiter@alcatraz.com| password123 | recruiter |
| seeker@example.com    | password123 | job_seeker|

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get authentication token
- `GET /api/auth/me` - Get current user information (protected)

### Jobs
- `GET /api/jobs/search` - Search for jobs with filters
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs` - Create a new job (recruiter/admin only)
- `POST /api/jobs/apply` - Apply for a job (job seeker only)

### Questionnaire
- `GET /api/questionnaire/questions` - Get questionnaire sections and questions
- `POST /api/questionnaire/submit` - Submit questionnaire answers
- `GET /api/questionnaire/results` - Get job recommendations based on questionnaire

### File Upload
- `POST /api/upload/cv` - Get a pre-signed URL for CV uploads

## User Workflows

### Job Seeker
1. Register/Login
2. Complete the multi-step skills questionnaire
3. Review job matches with detailed score breakdowns
4. Browse available jobs
5. Apply to jobs by uploading a CV
6. View application status

### Recruiter
1. Register/Login
2. Create new job listings
3. View applications for posted jobs
4. Update job statuses

### Admin
1. Login
2. Approve/reject job postings
3. Manage users
4. View system statistics

## Technology Stack

- **Frontend**:
  - React 18
  - React Router v6
  - Axios for API requests
  - CSS for styling
  - Vite for development and building

- **Backend**:
  - Express.js
  - Sequelize ORM
  - SQLite (development)
  - JSON Web Tokens for authentication
  - bcrypt for password hashing

## Project Documentation

For more detailed information, see the docs directory:

- **PLANNING.md** - Project planning and roadmap
- **API_CONTRACTS.md** - API specifications
- **DATABASE.md** - Database schema and operations
- **QUESTIONNAIRE-SCHEMA.md** - Detailed questionnaire structure
- **QUESTIONNAIRE-IMPLEMENTATION.md** - Technical details of the questionnaire feature
- **FEATURE_INTERACTIONS.md** - How features interact with each other

## License

This project is licensed under the MIT License.