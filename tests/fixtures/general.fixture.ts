import { Page, test as base } from '@playwright/test'
import { BACKEND_URL, PASSWORD, USERNAME } from '../../config/env-data'

const loginPath = 'login/student'
const orderPath = 'orders'

type Fixtures = {
  auth: { jwt: string }
  pageJwt: Page
  orderId: string
}

export const test = base.extend<Fixtures>({
  auth: async ({ request }, use) => {
    // Authorization fixture: Fetch JWT and provide it
    console.log('Init: getting jwt')
    const response = await request.post(`${BACKEND_URL}${loginPath}`, {
      data: {
        username: USERNAME,
        password: PASSWORD,
      },
    })
    const jwt = await response.text()
    await use({ jwt })
  },

  pageJwt: async ({ auth, context }, use) => {
    await context.addInitScript((token) => {
      localStorage.setItem('jwt', token)
    }, auth.jwt)
    const page = await context.newPage()
    await use(page)
  },

  orderId: async ({ auth, request }, use) => {
    // Order ID fixture: Create an order and expose the orderId
    const response = await request.post(`${BACKEND_URL}${orderPath}`, {
      data: {
        status: 'OPEN',
        courierId: 0,
        customerName: 'string',
        customerPhone: 'string',
        comment: 'string',
        id: 0,
      },
      headers: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    })

    const responseData = await response.json()
    const orderId = responseData.id
    console.log('order created with id: ', orderId)
    await use(orderId)
  },
})

// export { expect } from '@playwright/test'
