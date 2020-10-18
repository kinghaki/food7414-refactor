const express = require('express')
const router = express.Router()
const Ecpay = require('../ecpay/ECPAY_Payment_node_js')
const ecpaydata = require('../ecpay/ecpay')

router.post('/', (req, res) => {
  const create = new Ecpay() // create要在每次請求創建一個
  const htm = create.payment_client.aio_check_out_all(ecpaydata().baseparam, ecpaydata().inv_params)
  res.json(htm)
})
module.exports = router
