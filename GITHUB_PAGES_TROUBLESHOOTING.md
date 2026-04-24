# 🔧 GitHub Pages Troubleshooting Guide

## Issue: GitHub Pages Report Not Visible

Follow these steps to fix the issue:

---

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** (top navigation bar)
3. Scroll down and click **Pages** (left sidebar under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `gh-pages` (if it exists) or wait for workflow to create it
   - **Folder**: Select `/ (root)`
5. Click **Save**

---

## Step 2: Check if `gh-pages` Branch Exists

### Option A: Check on GitHub
1. Go to your repository
2. Click the branch dropdown (usually shows "main")
3. Look for `gh-pages` branch
4. If it doesn't exist, run the workflow first (it will create it)

### Option B: Check Locally
```bash
git fetch --all
git branch -a
```

Look for `remotes/origin/gh-pages`

---

## Step 3: Verify Workflow Ran Successfully

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Check that all steps completed:
   - ✅ Run Playwright tests
   - ✅ Upload Playwright Report
   - ✅ Deploy to GitHub Pages
   - ✅ Add Report Link to Summary

4. If "Deploy to GitHub Pages" step failed, check the error message

---

## Step 4: Check Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check ✅ **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

---

## Step 5: Manually Trigger Workflow

1. Go to **Actions** tab
2. Click **Playwright Tests** (left sidebar)
3. Click **Run workflow** button (right side)
4. Select branch: `main`
5. Click **Run workflow**
6. Wait for it to complete

---

## Step 6: Find Your Report URL

After workflow completes successfully:

### Method 1: From Actions Summary
1. Go to **Actions** tab
2. Click on the completed workflow run
3. Scroll to **Summary** section
4. Look for "🌐 View HTML Report Online"
5. Click the URL shown

### Method 2: Construct URL Manually
```
https://<username>.github.io/<repo-name>/reports/<run-number>/
```

**Example:**
```
https://johndoe.github.io/Playwright-demo/reports/5/
```

Where:
- `<username>` = Your GitHub username (check repository URL)
- `<repo-name>` = Your repository name (e.g., "Playwright-demo")
- `<run-number>` = Workflow run number (shown in Actions tab, e.g., #5)

---

## Step 7: Wait for GitHub Pages to Deploy

After first-time setup:
- ⏱️ Wait **1-5 minutes** for GitHub Pages to deploy
- 🔄 Refresh the page if you get 404
- 📱 Try in incognito/private browsing mode

---

## Common Issues & Solutions

### Issue 1: 404 - Page Not Found

**Possible Causes:**
- GitHub Pages not enabled
- `gh-pages` branch doesn't exist yet
- Pages still deploying (wait 2-5 minutes)

**Solutions:**
1. Enable GitHub Pages (Step 1)
2. Run workflow to create `gh-pages` branch
3. Wait a few minutes and refresh

---

### Issue 2: "Deploy to GitHub Pages" Step Fails

**Error:** `Permission denied`

**Solution:**
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Save and re-run workflow

---

### Issue 3: Report URL Shows in Summary but 404

**Possible Causes:**
- Pages deployment is still in progress
- Wrong branch selected in Pages settings

**Solutions:**
1. Wait 2-5 minutes
2. Check **Settings** → **Pages** → Branch is `gh-pages`
3. Check **Actions** tab for a separate "pages-build-deployment" workflow
4. Wait for that workflow to complete

---

### Issue 4: `gh-pages` Branch Not Created

**Solution:**
The workflow creates it automatically. If it's not created:

1. Check workflow logs for errors in "Deploy to GitHub Pages" step
2. Verify permissions (Step 4)
3. Manually create the branch:
```bash
git checkout --orphan gh-pages
git rm -rf .
echo "GitHub Pages" > index.html
git add index.html
git commit -m "Initial gh-pages commit"
git push origin gh-pages
```

---

### Issue 5: Private Repository - 404 Error

**Note:** For private repositories, you need to be logged into GitHub to view Pages.

**Solutions:**
1. Make sure you're logged into GitHub
2. Try the URL in a new incognito window and log in
3. Or make the repository public (Settings → General → Danger Zone → Change visibility)

---

## Verification Checklist

Use this checklist to verify everything is set up correctly:

- [ ] GitHub Pages is enabled in Settings → Pages
- [ ] Source is set to "Deploy from a branch"
- [ ] Branch is set to `gh-pages` and folder is `/ (root)`
- [ ] Workflow permissions are "Read and write"
- [ ] Workflow ran successfully (all green checkmarks)
- [ ] "Deploy to GitHub Pages" step completed successfully
- [ ] `gh-pages` branch exists in repository
- [ ] Waited at least 2-5 minutes after first deployment
- [ ] Checked Actions tab for "pages-build-deployment" workflow
- [ ] Tried URL in incognito/private browsing mode

---

## Alternative: View Report Without GitHub Pages

If GitHub Pages still doesn't work, you can view reports by downloading artifacts:

1. Go to **Actions** tab
2. Click on workflow run
3. Scroll to **Artifacts** section (bottom)
4. Download **playwright-report** artifact
5. Extract the ZIP file
6. Open `index.html` in your browser

---

## Quick Test

To quickly test if GitHub Pages is working:

1. Go to: `https://<username>.github.io/<repo-name>/`
2. If you see anything (even a 404 from GitHub Pages, not browser), Pages is enabled
3. If you see browser's "can't reach this page", Pages is not enabled

---

## Need More Help?

### Check GitHub Pages Status
1. Go to **Settings** → **Pages**
2. Look for "Your site is live at..." message
3. If you see this, Pages is working

### Check Deployment History
1. Go to **Actions** tab
2. Look for workflows named "pages-build-deployment"
3. These show GitHub Pages deployment status

### Check Repository Settings
- Repository must be public OR you must have GitHub Pro/Team for private repo Pages
- Pages must be enabled in Settings

---

## Expected Result

When everything works correctly:

1. ✅ Workflow runs and completes successfully
2. ✅ `gh-pages` branch is created/updated
3. ✅ GitHub Pages shows "Your site is live at..."
4. ✅ Report URL is clickable in Actions summary
5. ✅ Opening URL shows interactive Playwright HTML report
6. ✅ Each workflow run creates a new report at `/reports/<run-number>/`

---

## Summary

**Most Common Fix:**
1. Enable GitHub Pages: **Settings** → **Pages** → Source: `gh-pages` branch
2. Set workflow permissions: **Settings** → **Actions** → **General** → Read and write permissions
3. Re-run workflow
4. Wait 2-5 minutes
5. Check the URL from Actions summary

**Still not working?** Download the artifact and open `index.html` locally.
