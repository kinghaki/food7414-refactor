const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
// 用來驗證是不是非法獲取token的方法，不能使用userapi
app.all('/', (req, res, next) => {
  const JWT = require('./Token/JWT')
  const token = req.headers.authorization
  if (token && req.path.includes('USER')) {
    const data = JWT.checkToken(token)
    if (data === 'error') {
      res.status(403).json('錯誤的token')
      return
    }
    next()
  } else {
    next()
  }
  // let token = req.headers.authorization
})
// 用來驗證是有無登入的請求
app.get('/api/checkToken', (req, res) => {
  const JWT = require('./Token/JWT')
  const token = req.headers.authorization
  if (token) {
    const data = JWT.checkToken(token)
    if (data === 'error') {
      res.status(403).send('不對的token，請重新登入')
    } else {
      res.send(true)
    }
  } else {
    res.send(false)
  }
})
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
// JWT token
const JWT = require('./route/getJWT')
app.use('/api/gettoken', JWT)
// ecpay
const ecpay = require('./route/getecpay')
app.use('/api/ecpay', ecpay)
app.listen(5001)
console.log('成功')
