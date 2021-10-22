
const { home } = require('../controllers/controls.js')

describe('Test controls.js', () => {
  test('responds to /', () => {
    const req = { }
    const res = {
      text: '',
      send: function (input) { this.text = input }
    }
    home(req, res)
    expect(res.text).toEqual('Hello, world!')
  })
})
