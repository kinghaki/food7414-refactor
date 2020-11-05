const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
router.post('/', (req, res) => {
  console.log(req.body.email)
  const token = JWT.generateToken(req.body.email)
  res.cookie('Token', token, {
    signed: true,
    httpOnly: true
  })
  res.status(200).end()
  // res.status(200).json(token)
})
module.exports = router
