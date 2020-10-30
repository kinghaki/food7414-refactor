const express = require('express')
const router = express.Router()
const Ecpay = require('../ecpay/ECPAY_Payment_node_js')
const ecpaydata = require('../ecpay/ecpay')

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
  console.log('test8797879')
  const create = new Ecpay() // create要在每次請求創建一個
  const htm = create.payment_client.aio_check_out_credit_onetime(ecpaydata().baseparam, ecpaydata().inv_params)
  res.json(htm)
})

module.exports = router
