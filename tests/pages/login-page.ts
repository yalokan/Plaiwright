import { Locator, Page } from '@playwright/test'
import { PASSWORD, SERVICE_URL, USERNAME } from '../../config/env-data'
import { OrderPage } from './order-page'

export class LoginPage {
  readonly page: Page
  readonly url: string = SERVICE_URL
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly signInButton: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.getByTestId('username-input')
    this.passwordField = page.getByTestId('password-input')
    this.signInButton = page.getByTestId('signIn-button')
  }

  async open() {
    await this.page.goto(this.url)
  }

  async signIn() {
    await this.usernameField.fill(USERNAME)
    await this.passwordField.fill(PASSWORD)
    await this.signInButton.click()
    return new OrderPage(this.page)
  }
}
