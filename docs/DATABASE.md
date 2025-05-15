# Database Documentation

## Overview
The application uses SQLite as the database for development. The database is managed using Sequelize ORM.

## Models

### User
```javascript
{
  id: INTEGER PRIMARY KEY,
  name: STRING NOT NULL,
  email: STRING UNIQUE NOT NULL,
  password_hash: STRING NOT NULL,
  role: ENUM('job_seeker', 'recruiter', 'admin') NOT NULL,
  created_at: DATETIME,
  updated_at: DATETIME
}
```

### Job
```javascript
{
  id: INTEGER PRIMARY KEY,
  title: STRING NOT NULL,
  category: STRING NOT NULL,
  description: TEXT NOT NULL,
  requirements: TEXT,
  salary: STRING,
  location: STRING,
  status: ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  posted_by: INTEGER REFERENCES User(id),
  created_at: DATETIME,
  updated_at: DATETIME
}
```

### QuestionnaireResponse
```javascript
{
  id: INTEGER PRIMARY KEY,
  user_id: INTEGER REFERENCES User(id),
  answers: JSON NOT NULL,
  created_at: DATETIME,
  updated_at: DATETIME
}
```

### Application
```javascript
{
  id: INTEGER PRIMARY KEY,
  user_id: INTEGER REFERENCES User(id),
  job_id: INTEGER REFERENCES Job(id),
  cv_url: TEXT,
  cover_note: TEXT,
  status: ENUM('submitted', 'reviewed', 'rejected', 'interviewing', 'hired') DEFAULT 'submitted',
  created_at: DATETIME,
  updated_at: DATETIME
}
```

### ResumeData
```javascript
{
  id: INTEGER PRIMARY KEY,
  user_id: INTEGER REFERENCES User(id),
  skills: TEXT DEFAULT '[]',
  experience: STRING(100),
  parsed_data: JSON,
  created_at: DATETIME,
  updated_at: DATETIME
}
```

## Relationships

- User (1) -> (N) Job (posted_by)
- User (1) -> (N) QuestionnaireResponse
- User (1) -> (N) Application
- User (1) -> (1) ResumeData
- Job (1) -> (N) Application

## Database Initialization

The database is initialized using Sequelize migrations. To initialize the database:

1. Navigate to the backend directory
2. Run `npm run init-db`

This will:
- Create the database file if it doesn't exist
- Run all migrations
- Create necessary tables
- Set up relationships

## Development Notes

- The database file is located at `backend/database.sqlite`
- Migrations are stored in `backend/migrations/`
- Models are defined in `backend/src/models/`
- Database configuration is in `backend/src/config/database.js` 