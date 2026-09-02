import { expect, test } from '@playwright/test';

test('renders portfolio sections and searchable project data', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Technical Skills' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Vault - Credential Management Library');
  await expect(page.locator('body')).toContainText('WAAS - Static Site and Web Framework');
  await expect(page.locator('body')).toContainText('Cloud');

  await page
    .getByPlaceholder('Search projects by name, description, language, or platform...')
    .fill('feature flag');

  await expect(page.getByRole('heading', { name: 'Feature Flag' })).toBeVisible();
  await expect(page.getByText('1 project found')).toBeVisible();
});
