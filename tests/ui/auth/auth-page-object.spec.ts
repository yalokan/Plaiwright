import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login-page'

test('Sign in button is disabled when an invalid username is entered', async ({ page }) => {
  const authPage = new LoginPage(page)
  await authPage.open()
  await authPage.usernameField.fill('hello')
  // await expect()
})
