const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:8888',
  credentials: true
}
))
app.use(cookieParser('Ryan'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
// app.use('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8887')
//   res.header('Access-Control-Allow-Credentials', true)
//   next()
// })
// 用來驗證是不是非法獲取token的方法，不能使用userapi
app.all('*', (req, res, next) => {
  const JWT = require('./Token/JWT')
  const token = req.signedCookies.Token
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
// 檢查有無登入
app.post('/api/USER/checkLogin', (req, res) => {
  if (req.signedCookies.Token) {
    res.json(true)
  } else {
    res.json(false)
  }
})
// 我在測試cookie的
app.get('/api/cookie', (req, res) => {
  console.log(req.signedCookies.d)

  res.cookie('d', 456, {
    path: '/',
    signed: true, // 对cookie密码进行加密的话, 需要使用到cookieParser 對應上面的app.use("gg")
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
  res.end()
})
// 用來驗證是有無登入的請求
// app.get('/api/checkToken', (req, res) => {
//   const JWT = require('./Token/JWT')
//   const token = req.headers.authorization
//   console.log(54654)
//   if (token) {
//     const data = JWT.checkToken(token)
//     if (data === 'error') {
//       res.status(403).send('不對的token，請重新登入')
//     } else {
//       res.send(true)
//     }
//   } else {
//     res.send(false)
//   }
// })
// 資料庫
require('./database/mongoose')
// require('./database/productall')
// header關鍵字提示
const header = require('./route/header')
app.use('/api/header', header)
// product資訊
const product = require('./route/productall')
app.use('/api/product', product)
// 添加 product到 cart
const addProduct = require('./route/addProduct')
app.use('/api/USER/addProduct', addProduct)
// item資訊
const item = require('./route/item')
app.use('/api/shop', item)
// 添加item 到 cart
const addItem = require('./route/addItem')
app.use('/api/USER/addItem', addItem)
// 用戶存放在cart商品
const USERCart = require('./route/getUSERCart')
app.use('/api/USER/getUSERCart', USERCart)
// JWT token
const JWT = require('./route/getJWT')
app.use('/api/gettoken', JWT)
// clear JWT Token
const clearJWT = require('./route/clearJWT')
app.use('/api/USER/clearJWT', clearJWT)
// ecpay
const ecpay = require('./route/getecpay')
app.use('/api/USER/ecpay', ecpay)
app.listen(5001)
console.log('成功')
