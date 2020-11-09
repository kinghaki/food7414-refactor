const express = require('express')
const router = express.Router()
const Ecpay = require('../ecpay/ECPAY_Payment_node_js')
const ecpaydata = require('../ecpay/ecpay')
const DBCart = require('../database/DBCart')
const JWT = require('../Token/JWT')
router.post('/', (req, res) => {
  const create = new Ecpay() // create要在每次請求創建一個
  const params = ecpaydata().baseparam
  const invoice = ecpaydata().inv_params
  params.TotalAmount = `${req.body.count}`
  const itemname = req.body.cart.join('#')
  params.ItemName = itemname
  // eslint-disable-next-line no-undef
  const htm = create.payment_client.aio_check_out_credit_onetime(params, invoice)
  res.json(htm)
})
router.post('/ATM', (req, res) => {
  console.log('test')
  const create = new Ecpay() // create要在每次請求創建一個
  // eslint-disable-next-line no-undef
  const htm = create.payment_client.aio_check_out_atm(params = ecpaydata().baseparam, 'http://localhost:8887/ecpay', '', '', invoice = ecpaydata().inv_params)
  res.json(htm)
})
router.get('/Credit', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then((result) => {
    // const results = JSON.parse(JSON.stringify(result))
    const create = new Ecpay() // create要在每次請求創建一個
    const htm = create.payment_client.aio_check_out_credit_onetime(ecpaydata(result.cart, result.count).baseparam, ecpaydata().inv_params)
    res.json(htm)
  })
})
router.post('/checkCode', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then(async (result) => {
    // const results = JSON.parse(JSON.stringify(result))
    if (result.cheapcode === false) {
      result.count -= 30
      result.cheapcode = true
      await DBCart.updateOne({ token: data }, { count: result.count, cheapcode: result.cheapcode })
      res.json(true)
    } else {
      res.json(false)
    }
  })
})
router.post('/takeCode', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then(async (result) => {
    // const results = JSON.parse(JSON.stringify(result))
    if (result.cheapcode === true) {
      result.count += 30
      result.cheapcode = false
      await DBCart.updateOne({ token: data }, { count: result.count, cheapcode: result.cheapcode })
      res.end()
    } else {
      res.end()
    }
  })
})

module.exports = router
