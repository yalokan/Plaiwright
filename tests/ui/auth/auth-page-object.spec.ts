import {expect, test} from '@playwright/test'
import { LoginPage } from '../../pages/login-page'

test.only('Sign in button is disabled when an invalid username is entered', async ({ page }) => {
  const authPage = new LoginPage(page)
  await authPage.open()
  const orderPage = await authPage.signIn()
  await expect(orderPage.statusButton).toBeVisible()

  await orderPage.createOrder()
    await expect(orderPage.OkButton).toBeVisible()
})
