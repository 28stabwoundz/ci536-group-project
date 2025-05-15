# Project Setup

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- SQLite3

## Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## Installation

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Initialize the database:
```bash
npm run init-db
```

4. Start the server:
```bash
npm start
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Port Configuration
- Backend runs on port 5001
- Frontend runs on port 3001-3004 (Vite development server)

## Development Guidelines
- All React components must use `.jsx` extension for Vite compatibility
- Backend uses Express.js with Sequelize ORM
- Frontend uses React with Vite
- Database is SQLite for development
- File uploads are stored in `backend/uploads` directory 