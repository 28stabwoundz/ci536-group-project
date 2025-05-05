# 🚀 DEPLOYMENT.md

This document outlines the deployment strategy for the Prison Jobs Platform.

## 🌐 Frontend (React)
- **Hosting Platform**: Local development (future: Vercel)
- **Branch**: `main`
- **Build Command**: `npm run build`
- **Local Development**: `npm run dev` (runs on ports 3001-3004)
- **Environment Variables**:
  - `VITE_API_URL=http://localhost:5001/api`

## ⚙️ Backend (Express API)
- **Hosting Options**: Local development (future: Render / Railway)
- **Start Command**: `npm run dev` (uses nodemon for development)
- **Local Development Port**: 5001
- **Environment Variables (.env)**:
  ```env
  PORT=5001
  NODE_ENV=development
  DB_DIALECT=sqlite
  DB_STORAGE=./database.sqlite
  JWT_SECRET=alcatraz_development_jwt_secret
  JWT_EXPIRES_IN=24h
  RESET_DB=false
  ```

## 🗄️ Database (SQLite for Development, PostgreSQL for Production)
- **Development**: SQLite (local file-based database)
- **Production Plan**: Migrate to PostgreSQL on Supabase / AWS RDS
- **Schema**: See `/docs/DATABASE.md`
- **Current Status**: SQLite fully implemented for development

## 🧾 CV Storage
- **Storage Type**: Local file storage
- **Upload Implementation**: Direct multipart uploads via multer
- **Files Path**: `/backend/uploads` directory
- **Access URL**: `/uploads/{filename}` via Express static middleware
- **Status**: Implemented

## 📩 Notifications
- **Email Provider**: Not yet implemented (planned: SendGrid / Amazon SES)
- **API**: `/api/notifications/email` (planned)
- **Use Case**: Application updates, interview invites
- **Status**: Not yet implemented

## ✅ Deployment Checklist
1. ✅ Convert all frontend components to .jsx file extension
2. ✅ Configure backend and frontend ports correctly
3. ✅ Implement database with Sequelize ORM
4. ✅ Set up Authentication with JWT
5. ✅ Implement protected routes in frontend
6. ✅ Complete core features (job search, questionnaire, applications)
7. 🔄 Complete admin dashboard
8. 🔄 Implement resume parsing functionality
9. ❌ Prepare for cloud deployment

## 🚨 Known Issues
- Port conflicts may occur if ports 5001 or 3001-3004 are already in use
- Separate terminal sessions needed for backend and frontend
- JWT secret should be changed for production deployment

## 🌥️ Cloud Deployment Strategy

### Stage 1: Database Migration
1. **Migrate from SQLite to PostgreSQL**
   - Adapt Sequelize models for PostgreSQL compatibility
   - Create database migration scripts
   - Test migrations in local PostgreSQL environment
   - Plan for data migration from development to production

2. **Create Cloud PostgreSQL instance**
   - Set up on Supabase or AWS RDS
   - Configure proper security settings
   - Set up backup policies

### Stage 2: Backend Deployment
1. **Render.com Setup**
   - Create web service using Node.js runtime
   - Connect to GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`

2. **Environment Configuration**
   - Update environment variables for production
   - Configure database connection string
   - Set secure JWT secret
   - Configure CORS for production domains

### Stage 3: Frontend Deployment
1. **Vercel Setup**
   - Connect GitHub repository
   - Configure build settings
   - Set environment variables with production API URL

2. **Build Optimization**
   - Enable build caching
   - Configure asset optimization
   - Test performance with Lighthouse

### Stage 4: Monitoring & Operations
1. **Set up Application Monitoring**
   - Add error tracking (Sentry)
   - Set up uptime monitoring
   - Configure log aggregation

2. **CI/CD Pipeline**
   - Implement GitHub Actions workflow
   - Add test step before deployment
   - Configure automatic deployment on merge to main

3. **Security Measures**
   - Implement rate limiting
   - Add security headers
   - Configure proper CORS settings
   - Review and address security vulnerabilities 