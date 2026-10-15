# Deployment Guide: GitHub & Vercel

This guide provides the exact commands and steps to push the **eakpustak** codebase to GitHub under the username **vedant-chautiwar** and deploy it live on **Vercel**.

---

## Part 1: Push to GitHub

### Step 1: Initialize Git and Commit Files

Open your terminal in the project directory (`d:\vedant-coding\eakpustak`) and run:

```bash
# Initialize a new git repository (if not already initialized)
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial commit - EAK International School website"

# Rename the default branch to main
git branch -M main
```

---

### Step 2: Link Remote Repository and Push

Make sure you have created an empty repository named **`eakpustak`** on GitHub under your account [github.com/vedant-chautiwar](https://github.com/vedant-chautiwar).

```bash
# Add the GitHub remote repository
git remote add origin https://github.com/vedant-chautiwar/eakpustak.git

# Push code to the main branch
git push -u origin main
```

> **Note (SSH alternative):** If you use SSH keys with GitHub, run:
> ```bash
> git remote add origin git@github.com:vedant-chautiwar/eakpustak.git
> git push -u origin main
> ```

---

### Step 3: Future Updates (Quick Reference)

Whenever you make changes in the future, run:

```bash
git add .
git commit -m "update: describe your changes here"
git push
```

---

## Part 2: Host on Vercel

### Method A: Vercel Dashboard with GitHub (Recommended)

This method connects your GitHub repository so every time you run `git push`, Vercel automatically deploys the latest version.

1. Go to [vercel.com](https://vercel.com) and log in (or sign up using your GitHub account).
2. Click **"Add New..."** in the top-right corner and select **"Project"**.
3. Under **"Import Git Repository"**, find and select **`vedant-chautiwar/eakpustak`** (click **"Import"**).
4. Configure the Project Settings (Vercel automatically detects Vite):
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.
6. Wait ~30–45 seconds. Your site will be live with a free `*.vercel.app` domain!

---

### Method B: Deploy via Vercel CLI (Direct Terminal)

If you prefer deploying directly from your command line:

```bash
# 1. Run Vercel CLI via npx (no global installation needed)
npx vercel

# Follow the interactive prompts:
# ? Set up and deploy "d:\vedant-coding\eakpustak"? [Y/n] y
# ? Which scope do you want to deploy to? (Select your account)
# ? Link to existing project? [y/N] n
# ? What's your project's name? eakpustak
# ? In which directory is your code located? ./
# ? Want to modify these settings? [y/N] n

# 2. Deploy directly to production:
npx vercel --prod
```

---

## SPA Routing Note (`vercel.json`)

To ensure client-side routing with React Router works properly when users directly navigate to or refresh pages like `/about`, `/admissions`, `/academics`, `/contact`, etc., a [`vercel.json`](file:///d:/vedant-coding/eakpustak/vercel.json) file has been configured in the project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This rewrites all incoming requests to `/index.html` so React Router handles the routing seamlessly without 404 errors.
