import { test, expect } from '@playwright/test';

test('TC001 - Verify successful login with valid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://leaftaps.com/opentaps');
  
  // Locate login elements
  const username = page.locator('#username');
  const password = page.locator('#password');
  const loginBtn = page.locator('.decorativeSubmit');
  
  // Verify login elements are visible
  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginBtn).toBeVisible();
  
  // Perform login
  await username.fill('democsr');
  await password.fill('crmsfa');
  await loginBtn.click();
  
  // Wait for navigation
  await page.waitForLoadState('networkidle');
  
  // Verify successful login by checking URL changed
  expect(page.url()).toContain('control/main');
  
  // Verify CRM/SFA link is visible on home page
  const crmSfaLink = page.locator('text=CRM/SFA');
  await expect(crmSfaLink).toBeVisible({ timeout: 10000 });
});
