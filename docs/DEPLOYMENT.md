# 🚀 DEPLOYMENT.md

This document outlines the cloud deployment strategy for the Prison Jobs Platform.

## 🌐 Frontend (React)
- **Hosting Platform**: Vercel
- **Branch**: `main` or `develop`
- **Build Command**: `npm run build`
- **Environment Variables**:
  - `VITE_API_URL=https://your-api-host/render`

## ⚙️ Backend (Express API)
- **Hosting Options**: Render / Railway
- **Start Command**: `npm start`
- **Environment Variables (.env)**:
  ```env
  PORT=5000
  DATABASE_URL=postgresql://user:pass@host/db
  JWT_SECRET=your_jwt_secret
  STORAGE_BUCKET=your_s3_or_firebase_bucket
  ```

## 🗄️ Database (PostgreSQL)
- **Cloud Options**: Supabase / AWS RDS / PlanetScale
- **Schema**: See `/docs/DATABASE.md`
- **Backup Policy**: Daily backup (set in provider dashboard)

## 🧾 CV Storage
- **Cloud Provider**: AWS S3 or Firebase Storage
- **Upload Flow**: Pre-signed URLs (via `/upload/cv` endpoint)

## 📩 Notifications
- **Email Provider**: SendGrid / Amazon SES
- **API**: `/notifications/email`
- **Use Case**: Application updates, interview invites

## ✅ Deployment Checklist
1. Connect Vercel to frontend repo
2. Deploy backend to Render with .env variables
3. Setup PostgreSQL and apply schema
4. Enable S3/Firebase and generate upload keys
5. Configure SendGrid or SES credentials 