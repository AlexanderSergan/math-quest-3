import type { PlaywrightTestConfig } from '@playwright/test';
import { NyanReporterOptions } from '@alex_neo/playwright-nyan-reporter/dist';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: '50%',
  reporter: [
    [
      '@alex_neo/playwright-nyan-reporter',
      {
        suppressErrorReporter: true,
        renderOnRunCompletely: false,
      } as NyanReporterOptions,
    ],
  ],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
};

export default config;