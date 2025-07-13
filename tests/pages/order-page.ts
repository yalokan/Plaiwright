import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
  }
}
