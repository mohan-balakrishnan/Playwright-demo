import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: 'https://leaftaps.com/opentaps',
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    headless: true,
    
    // HAR file recording - separate file per test, skip media files
    recordHar: {
      mode: 'minimal',
      urlFilter: (url) => {
        // Skip images, videos, fonts, and other media files
        return !url.match(/\.(jpg|jpeg|png|gif|svg|webp|mp4|webm|avi|mov|woff|woff2|ttf|eot|ico|css)$/i);
      },
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
