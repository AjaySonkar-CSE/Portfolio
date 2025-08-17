#!/bin/bash

echo "🚀 Deploying Ajay's Portfolio to Render..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Dist folder not found. Build may have failed."
    exit 1
fi

echo "📤 Pushing to GitHub..."
git add .
git commit -m "Deploy to Render - $(date)"
git push origin main

echo "🎉 Deployment files ready!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://render.com"
echo "2. Sign up/Login with GitHub"
echo "3. Click 'New +' → 'Static Site'"
echo "4. Connect your GitHub repository"
echo "5. Configure:"
echo "   - Name: ajay-portfolio"
echo "   - Build Command: npm run build"
echo "   - Publish Directory: dist"
echo "6. Click 'Create Static Site'"
echo ""
echo "🌐 Your site will be available at: https://ajay-portfolio.onrender.com"
