# 🚀 Enable GitHub Pages - Step by Step

## Your Repository: `mohan-balakrishnan/Playwright-demo`

You're getting a 404 because GitHub Pages is not enabled yet. Follow these exact steps:

---

## ✅ Step 1: Enable GitHub Pages

1. Go to: https://github.com/mohan-balakrishnan/Playwright-demo/settings/pages

2. You should see a page titled **"GitHub Pages"**

3. Under **"Build and deployment"** section:
   - **Source**: Click dropdown and select `Deploy from a branch`
   - **Branch**: Click dropdown and select `gh-pages` 
     - If `gh-pages` doesn't appear, see Step 2 below
   - **Folder**: Select `/ (root)`

4. Click **Save** button

5. You should see a message: "Your site is ready to be published at https://mohan-balakrishnan.github.io/Playwright-demo/"

---

## ⚠️ Step 2: If `gh-pages` Branch Doesn't Exist

If you don't see `gh-pages` in the branch dropdown:

### Option A: Check if it exists
1. Go to: https://github.com/mohan-balakrishnan/Playwright-demo/branches
2. Look for `gh-pages` branch
3. If it exists, go back to Step 1 and select it

### Option B: Create it via workflow
The workflow should create it automatically. Let's verify:

1. Go to: https://github.com/mohan-balakrishnan/Playwright-demo/settings/actions

2. Scroll to **"Workflow permissions"**

3. Select: ✅ **Read and write permissions**

4. Check: ✅ **Allow GitHub Actions to create and approve pull requests**

5. Click **Save**

6. Now run the workflow:
   - Go to: https://github.com/mohan-balakrishnan/Playwright-demo/actions
   - Click **"Playwright Tests"** (left sidebar)
   - Click **"Run workflow"** button (right side)
   - Click green **"Run workflow"** button
   - Wait for it to complete

7. After workflow completes, check: https://github.com/mohan-balakrishnan/Playwright-demo/branches
   - You should now see `gh-pages` branch

8. Go back to Step 1 and enable GitHub Pages

---

## 🔍 Step 3: Verify Workflow Deployed Successfully

1. Go to: https://github.com/mohan-balakrishnan/Playwright-demo/actions

2. Click on the latest workflow run (should be green ✅)

3. Check these steps completed successfully:
   - ✅ Run Playwright tests
   - ✅ Upload Playwright Report
   - ✅ **Deploy to GitHub Pages** ← This is critical!
   - ✅ Add Report Link to Summary

4. If "Deploy to GitHub Pages" step failed:
   - Click on it to see error message
   - Most likely: Permission issue (fix in Step 2)

---

## ⏱️ Step 4: Wait for Deployment

After enabling GitHub Pages for the first time:

1. Wait **2-5 minutes** for initial deployment

2. Check deployment status:
   - Go to: https://github.com/mohan-balakrishnan/Playwright-demo/actions
   - Look for a workflow named **"pages-build-deployment"**
   - Wait for it to complete (green checkmark)

3. Once complete, your report will be available at:
   ```
   https://mohan-balakrishnan.github.io/Playwright-demo/reports/6/
   ```

---

## 🎯 Step 5: Access Your Report

### For Run #6:
```
https://mohan-balakrishnan.github.io/Playwright-demo/reports/6/
```

### For Future Runs:
```
https://mohan-balakrishnan.github.io/Playwright-demo/reports/<run-number>/
```

Where `<run-number>` is shown in the Actions tab (e.g., #7, #8, #9...)

---

## 🔧 Quick Checklist

Complete these in order:

- [ ] **Step 1**: Go to Settings → Pages
- [ ] **Step 2**: Set Source to "Deploy from a branch"
- [ ] **Step 3**: Set Branch to "gh-pages" and Folder to "/ (root)"
- [ ] **Step 4**: Click Save
- [ ] **Step 5**: Go to Settings → Actions → Set "Read and write permissions"
- [ ] **Step 6**: Go to Actions → Run workflow manually
- [ ] **Step 7**: Wait for workflow to complete (green checkmark)
- [ ] **Step 8**: Wait for "pages-build-deployment" workflow to complete
- [ ] **Step 9**: Wait 2-5 minutes
- [ ] **Step 10**: Try the URL again

---

## 🆘 Still Getting 404?

### Check 1: Is GitHub Pages Enabled?
Go to: https://github.com/mohan-balakrishnan/Playwright-demo/settings/pages

You should see:
```
✅ Your site is live at https://mohan-balakrishnan.github.io/Playwright-demo/
```

If you see "GitHub Pages is currently disabled", enable it (Step 1).

### Check 2: Does gh-pages Branch Exist?
Go to: https://github.com/mohan-balakrishnan/Playwright-demo/tree/gh-pages

- If you see files, the branch exists ✅
- If you see 404, the branch doesn't exist ❌ (follow Step 2)

### Check 3: Did Deployment Succeed?
Go to: https://github.com/mohan-balakrishnan/Playwright-demo/deployments

- You should see "github-pages" deployments
- Latest should be "Active" with green checkmark
- If no deployments, GitHub Pages isn't enabled

---

## 📱 Alternative: Download Report

If you need the report immediately while setting up Pages:

1. Go to: https://github.com/mohan-balakrishnan/Playwright-demo/actions
2. Click on workflow run #6
3. Scroll to **Artifacts** section (bottom)
4. Download **playwright-report**
5. Extract ZIP file
6. Open `index.html` in your browser

---

## 🎓 Summary

**The issue:** GitHub Pages is not enabled in your repository settings.

**The fix:** 
1. Go to Settings → Pages
2. Enable it by selecting `gh-pages` branch
3. Wait 2-5 minutes
4. Access your report

**Direct link to enable:** https://github.com/mohan-balakrishnan/Playwright-demo/settings/pages

---

## ✅ Expected Result

After completing all steps, you should see:

1. In Settings → Pages:
   ```
   ✅ Your site is live at https://mohan-balakrishnan.github.io/Playwright-demo/
   ```

2. In Actions → Workflow Summary:
   ```
   🌐 View HTML Report Online
   Report URL: https://mohan-balakrishnan.github.io/Playwright-demo/reports/6/
   ```

3. Clicking the URL shows your interactive Playwright HTML report 🎉

---

**Start here:** https://github.com/mohan-balakrishnan/Playwright-demo/settings/pages
