import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeMessage: Locator;
  readonly logoutLink: Locator;
  readonly crmSfaLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('.loggedInUser');
    this.logoutLink = page.locator('text=Logout');
    this.crmSfaLink = page.locator('text=CRM/SFA');
  }

  async isHomePageDisplayed(): Promise<boolean> {
    return await this.crmSfaLink.isVisible();
  }

  async getWelcomeMessage(): Promise<string> {
    return await this.welcomeMessage.textContent() || '';
  }

  async logout() {
    await this.logoutLink.click();
  }
}
