const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
router.get('/', (req, res) => {
  console.log(req.query.email)
  const token = JWT.generateToken(req.query.email)
  res.status(200).json(token)
})
module.exports = router
