# Deployment Guide - Vercel

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed: `npm install -g vercel`

## Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy from Root Directory
```bash
# From the project root directory
vercel
```

### 4. Follow the Prompts
- Set up and deploy: Yes
- Which scope: Select your account
- Link to existing project: No
- Project name: react-berry-dashboard (or your preferred name)
- Directory: ./ (root)
- Override settings: No

### 5. Set Environment Variables (Important!)
After first deployment, go to your Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add the following:
   - `SQLITE_PATH`: `./database.db`
   - `NODE_ENV`: `production`

### 6. Redeploy
```bash
vercel --prod
```

## Important Notes

### Database Considerations
- SQLite is **not recommended** for production on Vercel (serverless functions are stateless)
- Consider migrating to:
  - **PostgreSQL** (Vercel Postgres, Supabase, or Neon)
  - **MongoDB** (MongoDB Atlas)
  - **MySQL** (PlanetScale)

### Alternative: Deploy Backend Separately
For better performance, consider:
1. Deploy frontend on Vercel
2. Deploy backend on:
   - Railway (supports SQLite with persistent storage)
   - Render
   - Heroku
   - DigitalOcean App Platform

## Quick Deploy Button
You can also deploy directly from GitHub:
1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Vercel will auto-detect the configuration

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node version is 18 or higher

### API Routes Not Working
- Verify `vercel.json` configuration
- Check environment variables are set

### Database Issues
- SQLite won't persist on Vercel serverless
- Migrate to a cloud database for production

## Post-Deployment
- Test all routes
- Verify authentication works
- Check API endpoints
- Monitor logs in Vercel dashboard
