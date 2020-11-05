const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
const DBCart = require('../database/DBCart')

router.get('/', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then((result) => {
    if (!result) {
      res.json([])
    }
  })
})

module.exports = router
