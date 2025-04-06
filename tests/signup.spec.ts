import { test as base, expect } from '@playwright/test';

// Define the type for our fixture data
type UserData = {
  randomName: string;
  randomUsername: string;
  randomEmail: string;
};

// Extend the base test object with our new fixture
const test = base.extend<{
  userData: UserData;
}>({ 
  userData: [async ({}, use) => {
    // Generate data once per worker
    const names = ['Alex', 'Sam', 'Jordan', 'Taylor', 'Morgan', 'Riley', 'Casey', 'Quinn'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomUsername = `test-${Math.random().toString(36).substring(2, 8)}`;
    const randomEmail = `test-${randomUsername}@example.com`; // Use username for consistency

    // Provide the data to the tests
    await use({ randomName, randomUsername, randomEmail });
  }, { scope: 'worker' }] // Run once per worker
});

// Describe block to potentially run tests serially if dependent
test.describe('[MOCKED] Signup and Login Flow', () => {
  // Optional: Uncomment if signup MUST complete before login test runs
  // test.describe.configure({ mode: 'serial' });

  test('complete signup process', async ({ page, userData }) => {
    // Navigate to signup page with full URL
    await page.goto('http://localhost:3000/signup');
    
    // Step 1: Parent Information
    await page.getByLabel('Your Name').fill('Test Parent');
    await page.getByLabel('Email').fill(userData.randomEmail); // Use fixture data
    await page.getByLabel('Password').fill('TestPassword123!');
    await page.getByRole('button', { name: 'Continue' }).click();
    
    // Wait for the Child's Name input field to be visible
    await expect(page.getByLabel("Child's Name")).toBeVisible();

    // Step 2: Child Information
    await page.getByLabel("Child's Name").fill(userData.randomName); // Use fixture data
    await page.getByLabel("Child's Username").fill(userData.randomUsername); // Use fixture data
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

  test("[MOCKED] child login flow", async ({ page, userData }) => {
    // Navigate to child login page (Update URL if necessary)
    await page.goto("http://localhost:3000/login");

    // Fill in child credentials using shared fixture data
    await page.fill('input[name="username"]', userData.randomUsername ); // Use fixture data
    await page.fill('input[name="pin"]', "1234"); // PIN might need separate handling if dynamic

    // Click the login button (Update selector if necessary)
    await page.click('button[type="submit"]');

    // Verify navigation to child dashboard (Update URL if necessary)
    await expect(page).toHaveURL("http://localhost:3000/child-dashboard"); 
  }); 
}); 