import { Locator, Page } from '@playwright/test'
import {SERVICE_URL} from '../../config/env-data'

export class StatusPage {
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

}
