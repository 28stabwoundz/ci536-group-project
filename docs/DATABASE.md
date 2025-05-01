# 📊 DATABASE.md

## 📁 Core Tables

### 1. `users`
Stores user account and role data.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  answers JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. `applications`
Stores job applications with CV links.

```sql
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
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
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  skills TEXT[] DEFAULT '{}',
  experience VARCHAR(100),
  parsed_data JSONB,
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

- answers and parsed_data are stored as JSONB for flexibility
- Use PostgreSQL array ops (e.g. @>) for skill matching
- Filter jobs by status = 'approved' in public listings 