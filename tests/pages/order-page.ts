import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly clientName: Locator
  readonly clientPhone: Locator
  readonly createOrderButton: Locator
  readonly OkButton: Locator

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.clientName = page.getByTestId('username-input')
    this.clientPhone = page.getByTestId('phone-input')
    this.OkButton = page.getByTestId('orderSuccessfullyCreated-popup-ok-button')
    this.createOrderButton = page.getByTestId('createOrder-button')
  }

  async createOrder() {
    await this.clientName.fill('MyName')
    await this.clientPhone.fill('1233554877')
    await this.createOrderButton.click()
  }
}
