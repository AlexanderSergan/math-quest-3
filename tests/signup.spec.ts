import { test, expect } from '@playwright/test';

test('complete signup process with random username', async ({ page }) => {
  // Generate a random username with 'test-' prefix and random name
  const names = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan', 'Riley', 'Casey', 'Quinn'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomUsername = `test-${Math.random().toString(36).substring(2, 8)}`;
  
  // Navigate to signup page with full URL
  await page.goto('http://localhost:3000/signup');
  
  // Step 1: Parent Information
  await page.getByLabel('Your Name').fill('Test Parent');
  await page.getByLabel('Email').fill(`test-${randomUsername}@example.com`);
  await page.getByLabel('Password').fill('TestPassword123!');
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Step 2: Child Information
  await page.getByLabel("Child's Name").fill(randomName);
  await page.getByLabel("Child's Username").fill(randomUsername);
  await page.getByLabel("Child's Password").fill('ChildPassword123!');
  await page.getByLabel('School Year').selectOption('year3');
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Step 3: Terms and Conditions
  await page.getByLabel('I agree to the').check();
  await page.getByRole('button', { name: 'Create Account' }).click();
  
  // Verify redirection to choose-plan page
  // await expect(page).toHaveURL('http://localhost:3000/choose-plan');            

  // Select the free trial block
  await page.getByText('Start with Free Trial').click();

  // Click the continue button
  await page.click('button:has-text("Continue")');

  // Wait for navigation to parent dashboard
  await page.waitForURL('http://localhost:3000/parent-dashboard');

  // verify that there is a heading with text 'Parent Dashboard'
  await expect(page.getByTestId('parent-dashboard-heading')).toBeVisible();
}); 