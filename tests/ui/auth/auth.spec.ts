import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'

test('Sign in button is disabled when an invalid username is entered', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('-')
  const signInButton = page.getByTestId('signIn-button')
  const errorMessage = page.getByTestId('username-input-error').nth(0)
  await expect(signInButton).toBeDisabled()
  await expect(errorMessage).toBeVisible()
})

test('when username and/or password incorrect', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  const passwordField = page.getByTestId('password-input')
  await usernameField.fill('afads')
  await passwordField.fill('dsfsddfdsfsd')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  const errorPopup = page.getByTestId('authorizationError-popup')
  await expect(errorPopup).toBeVisible()
})
