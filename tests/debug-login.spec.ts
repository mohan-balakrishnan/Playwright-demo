import { test, expect } from '@playwright/test';

test('Debug - Check login elements and credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://leaftaps.com/opentaps');
  
  // Take screenshot of login page
  await page.screenshot({ path: 'login-page.png', fullPage: true });
  
  // Check if elements exist
  const username = page.locator('#username');
  const password = page.locator('#password');
  const loginBtn = page.locator('.decorativeSubmit');
  
  console.log('Username field exists:', await username.count());
  console.log('Password field exists:', await password.count());
  console.log('Login button exists:', await loginBtn.count());
  
  // Try to login
  await username.fill('democsr');
  await password.fill('crmsfa');
  
  // Take screenshot before clicking
  await page.screenshot({ path: 'before-login.png', fullPage: true });
  
  await loginBtn.click();
  
  // Wait a bit
  await page.waitForTimeout(3000);
  
  // Take screenshot after clicking
  await page.screenshot({ path: 'after-login.png', fullPage: true });
  
  console.log('Current URL:', page.url());
  
  // Check for error messages
  const errorDiv = page.locator('#errorDiv');
  if (await errorDiv.isVisible()) {
    console.log('Error message:', await errorDiv.textContent());
  }
});
