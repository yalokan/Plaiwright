import { SERVICE_URL } from '../../../config/env-data'
import { test } from '../../fixtures/general.fixture'
import { expect } from '@playwright/test'

test.only('search for existing order', async ({ pageJwt, orderId }) => {
  await pageJwt.goto(SERVICE_URL)
  await pageJwt.getByTestId('openStatusPopup-button').click()
  await pageJwt.getByTestId('searchOrder-input').fill(String(orderId))
  await pageJwt.getByTestId('searchOrder-submitButton').click()
  await expect(pageJwt.getByText('OPEN')).toBeVisible()
})
