import { test, expect } from '@playwright/test';

test('TC001 - Verify login page elements are displayed', async ({ page }) => {
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
  
  // Verify page title or URL
  expect(page.url()).toContain('leaftaps.com/opentaps');
});
