const express = require('express')
const router = express.Router()
router.delete('/', (req, res) => {
  res.clearCookie('Token')
  res.status(200).end()
  // res.status(200).json(token)
})
module.exports = router
