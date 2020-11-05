const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
const DBCart = require('../database/DBCart')

router.get('/product', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then((result) => {
    // console.log(result)
    if (result) {
      const data = {}
      data.cart = result.cart
      data.count = result.count
      data.height = result.height
      data.productcount = result.productcount
      console.log(data)
      res.json(data)
    } else {
      console.log(result)
      res.json({ name: '123' })
    }
  })
})
router.get('/item', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then((result) => {
    const data = {}
    data.cart = result.cart
    data.count = result.count
    data.height = result.height
    data.productcount = result.productcount
    res.json(data)
  })
})

module.exports = router
