const express = require('express')
const router = express.Router()
const Ecpay = require('ecpay_payment_nodejs_quick')
const ecpaydata = require('../ecpay/ecpay')
const create = new Ecpay()
router.get('/', (req, res) => {
  const htm = create.payment_client.aio_check_out_all(ecpaydata().baseparam, ecpaydata().inv_params)
  res.json(htm)
})
module.exports = router
