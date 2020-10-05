const express = require('express')
const router = express.Router()
const product = require('../database/productall')
router.get('/click', (req, res) => {
  const data1 = []
  product.find({}).then((response) => {
    response.forEach((value) => {
      data1.push(value.name)
    })
    res.json(data1)
  })
})
router.get('/input', (req, res) => {
  const data = []
  product.find({}).then((response) => {
    response.forEach((value) => {
      if (value.name.includes(req.query.value)) {
        data.push(value.name)
      }
    })
    res.json(data)
  })
})
module.exports = router
