const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
router.post('/', (req, res) => {
  const token = JWT.generateToken(req.body.email)
  console.log(req.body)
  res.cookie('Token', token, {
    signed: true,
    httpOnly: true,
    secure: false
  })
  res.status(200).json(token)
  // res.status(200).json(token)
})
module.exports = router
