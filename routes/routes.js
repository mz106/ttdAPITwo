
const express = require('express')
const { home, hello } = require('../controllers/controls.js')

const router = express.Router()

router.get('/', home)
router.get('/hello/:name', hello)

module.exports = router
