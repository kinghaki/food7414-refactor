const express = require('express')
const router = express.Router()
const Ecpay = require('../ecpay/ECPAY_Payment_node_js')
const ecpaydata = require('../ecpay/ecpay')

router.post('/', (req, res) => {
  const create = new Ecpay() // create要在每次請求創建一個
  // eslint-disable-next-line no-undef
  const htm = create.payment_client.aio_check_out_all(params = ecpaydata().baseparam, invoice = ecpaydata().inv_params)
  res.json(htm)
})
router.post('/ATM', (req, res) => {
  console.log('test')
  const create = new Ecpay() // create要在每次請求創建一個
  // eslint-disable-next-line no-undef
  const htm = create.payment_client.aio_check_out_atm(ecpaydata().baseparam, ecpaydata().inv_params)
  res.json(htm)
})
module.exports = router
