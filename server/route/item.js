const express = require('express')
const router = express.Router()
const product = require('../database/productall')
router.get('/id', (req, res) => {
  product.find({ _id: req.query.id }).then((response) => {
    console.log(response)
    res.json(response)
  })
})
module.exports = router
