import { expect, test } from '@playwright/test'
import { BACKEND_URL, PASSWORD, USERNAME } from '../../config/env-data'

const loginPath = 'login/student'

test('auth with correct data should receive token', async ({ request }) => {
  const requestBody = {
    username: USERNAME,
    password: PASSWORD,
  }

  const authResponse = await request.post(`${BACKEND_URL}${loginPath}`, {
    data: requestBody,
  })

  const jwt = await authResponse.text()
  expect.soft(authResponse.status()).toBe(200)
  expect.soft(jwt).toBeDefined()
})
