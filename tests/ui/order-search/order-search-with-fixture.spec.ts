import { SERVICE_URL } from '../../../config/env-data'
import { test } from '../../fixtures/general.fixture'
import { expect } from '@playwright/test'

test('search for existing order', async ({ pageJwt, orderId }) => {
  await pageJwt.goto(SERVICE_URL)
  await pageJwt.getByTestId('openStatusPopup-button').click()
  await pageJwt.getByTestId('searchOrder-input').fill(String(orderId))
  await pageJwt.getByTestId('searchOrder-submitButton').click()

  const orderOpenStatusColor = await pageJwt
    .getByText('OPEN')
    .evaluate((el) => getComputedStyle(el).backgroundColor)
  expect.soft(orderOpenStatusColor).toBe('rgb(253, 204, 0)')
  const orderDeliveredStatusColor = await pageJwt
    .getByText('DELIVERED', { exact: true })
    .evaluate((el) => getComputedStyle(el).backgroundColor)
  expect.soft(orderDeliveredStatusColor).toBe('rgba(0, 0, 0, 0)')
})
