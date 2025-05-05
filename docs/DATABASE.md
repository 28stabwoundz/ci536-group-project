# 📊 DATABASE.md

## 📁 Core Tables

### 1. `users`
Stores user account and role data.

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('job_seeker', 'recruiter', 'admin')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes:
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

### 2. `jobs`
Job listings submitted by recruiters.

```sql
CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  salary VARCHAR(50),
  location VARCHAR(100),
  posted_by INTEGER REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. `questionnaire_responses`
Job seeker questionnaire answers.

```sql
CREATE TABLE questionnaire_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  answers JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. `applications`
Stores job applications with CV links.

```sql
CREATE TABLE applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  job_id INTEGER REFERENCES jobs(id),
  cv_url TEXT,
  cover_note TEXT,
  status VARCHAR(20) DEFAULT 'submitted' CHECK (status IN ('submitted', 'reviewed', 'rejected', 'interviewing', 'hired')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. `resume_data`
Stores parsed resume info.

```sql
CREATE TABLE resume_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  skills TEXT DEFAULT '[]',
  experience VARCHAR(100),
  parsed_data JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔗 Relationships Summary

- users → jobs (via posted_by)
- users → questionnaire_responses
- users → applications
- applications → jobs
- users → resume_data

## 📌 Notes

- answers and parsed_data are stored as JSON for flexibility
- For SQLite development, we use JSON instead of PostgreSQL's JSONB
- JSON arrays are used instead of PostgreSQL's array types
- Filter jobs by status = 'approved' in public listings

## 🚀 Implementation Status

### Phase 1: Development Database Setup (Completed)
1. **SQLite Configuration**
   - ✅ SQLite database set up for development
   - ✅ Database location configured in .env file
   - ✅ Automated setup script created

2. **Database Connection Setup**
   - ✅ Sequelize ORM integrated
   - ✅ Database connection pool established
   - ✅ Helper functions implemented

3. **Mock Data Population**
   - ✅ Seed scripts created with initial data
   - ✅ Admin user(s) created
   - ✅ Sample jobs in different categories added
   - ✅ Test user accounts created (job seekers, recruiters)

### Phase 2: ORM Integration (Completed)
1. **Sequelize Setup**
   - ✅ Sequelize models defined for all tables
   - ✅ Relationships established between models
   - ✅ Schema validation implemented

2. **Migration Scripts**
   - ✅ Migration files created for all tables
   - ✅ Database reset functionality implemented
   - ✅ Rollback capability verified

3. **Model-Based Access**
   - ✅ Route handlers using DB models
   - ✅ Proper error handling for DB operations
   - ✅ Transaction support for multi-step operations

### Phase 3: Cloud Database Migration (Future)
1. **Provisioning**
   - ❌ Set up cloud PostgreSQL instance
   - ❌ Configure security groups and access controls
   - ❌ Test connectivity from development environment

2. **Schema Migration**
   - ❌ Adapt SQLite models for PostgreSQL
   - ❌ Run migration scripts against cloud instance
   - ❌ Seed initial required data

3. **Connection String Management**
   - ❌ Update environment variables for different environments
   - ❌ Implement connection pooling for production
   - ❌ Add SSL configuration for secure connections

## 🔧 Database Operations Guide

### Common Queries

**1. Job Search with Filters**
```js
// Using Sequelize
const jobs = await Job.findAll({
  where: {
    status: 'approved',
    ...(searchTerm && {
      [Op.or]: [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { description: { [Op.like]: `%${searchTerm}%` } }
      ]
    }),
    ...(category && { category }),
    ...(location && { location: { [Op.like]: `%${location}%` } })
  },
  order: [['createdAt', 'DESC']],
  limit,
  offset
});
```

**2. Application Status for User**
```js
// Using Sequelize
const applications = await Application.findAll({
  include: [{ model: Job, attributes: ['title', 'id'] }],
  where: { user_id: userId },
  order: [['createdAt', 'DESC']]
});
```

**3. Job Recommendations Based on Questionnaire**
```js
// Using Sequelize and custom logic
const response = await QuestionnaireResponse.findOne({
  where: { user_id: userId }
});

const jobs = await Job.findAll({
  where: { status: 'approved' }
});

// Custom matching logic using the questionnaire responses
const matchedJobs = jobs.map(job => {
  // Calculate match score based on job requirements and user answers
  const matchScore = calculateMatchScore(job, response.answers);
  return {
    ...job.toJSON(),
    matchScore
  };
}).sort((a, b) => b.matchScore - a.matchScore);
``` 