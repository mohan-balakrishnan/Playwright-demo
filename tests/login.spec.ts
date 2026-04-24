import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Leaftaps Login Functionality', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigate();
  });

  test('TC001 - Verify successful login with valid credentials', async ({ page }) => {
    await loginPage.login('democsr', 'crmsfa');
    
    // Wait for navigation after login
    await page.waitForURL(/.*control\/main/, { timeout: 10000 });
    
    // Verify CRM/SFA link is visible on home page
    await expect(homePage.crmSfaLink).toBeVisible({ timeout: 10000 });
  });
});
