# Environment Variables Example

This file contains example environment variables for the project. Copy this file to `.env` in the backend directory and update the values as needed.

## Server Configuration
PORT=5001
NODE_ENV=development  # 'development' or 'production'

## Database Configuration (SQLite for development)
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
RESET_DB=false  # Set to 'true' to reset the database on server start (caution: data will be lost)

## Database Configuration (PostgreSQL - for production)
# Uncomment and configure for PostgreSQL in production
# DB_DIALECT=postgres
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=prison_jobs
# DB_USER=your_username
# DB_PASSWORD=your_password

## JWT Configuration
JWT_SECRET=alcatraz_development_jwt_secret  # Change this in production!
JWT_EXPIRES_IN=24h  # Token expiration time

## API Configuration
API_VERSION=v1
API_PREFIX=/api 