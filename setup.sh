#!/bin/bash

echo "Setting up Prison Jobs Platform..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "Setup complete!"
echo ""
echo "To start the backend: cd backend && npm run dev"
echo "To start the frontend: cd frontend && npm start" 