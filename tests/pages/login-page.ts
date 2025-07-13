import { Locator, Page } from '@playwright/test'
import { SERVICE_URL } from '../../config/env-data'
import { OrderPage } from './order-page'

export class LoginPage {
  readonly page: Page
  readonly url: string = SERVICE_URL
  readonly usernameField: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.getByTestId('username-input')
  }

  async open() {
    await this.page.goto(this.url)
  }

  async signIn() {
    // actions
    return new OrderPage(this.page)
  }
}
