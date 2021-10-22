
const request = require('supertest')
const express = require('express')

const router = require('../routes/routes.js')

const app = express()

app.use('/', router)

describe('Home routes', () => {
  test('responds to /', async () => {
    const res = await request(app).get('/')
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('Hello, world!')
  })

  test('responds to /hello/:name', async () => {
    const res = await request(app).get('/hello/dave')
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('Hello, dave!')
  })
})
