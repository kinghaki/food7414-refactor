const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
// 資料庫
require('./database/mongoose')
// require('./database/productall')
// header關鍵字提示
const header = require('./route/header')
app.use('/api/header', header)
// product資訊
const product = require('./route/productall')
app.use('/api/product', product)
// item資訊
const item = require('./route/item')
app.use('/api/shop', item)
// googleapi
const oauth = require('./googleapi/index')
app.get('/api/googleapi', (req, res) => {
  const url = oauth.getAuthurl()
  res.json(url)
})
app.listen(5001)
console.log('成功')
