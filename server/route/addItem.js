const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
const productall = require('../database/productall')
const DBCart = require('../database/DBCart')

router.post('/', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  const productInfo = req.body
  DBCart.findOne({ token: data }).then(async (result) => {
    //   findone是輸出 {}
    //  findmany 是輸出 [{}]
    // 資料庫還沒有此用戶的cart數據
    if (!result) {
    //   result = null
      const { afterprice } = await productall.findOne({ name: productInfo.name })
      const counts = afterprice * productInfo.count
      await DBCart.create({ token: data, cart: productInfo, count: counts, productcount: 1 })
    } else {
      const flag = result.cart.some((item) => {
        if (item.name === productInfo.name) {
          return true
        }
        return false
      })
      //   true的話代表已經有某product在資料庫了直街添加
      //  false代表某product還沒在資料庫
      if (flag) {
        for (const value of result.cart) {
          if (value.name === productInfo.name) {
            value.count += productInfo.count
            const { afterprice } = await productall.findOne({ name: productInfo.name })
            result.count += (afterprice * productInfo.count)
            //   要await才能存 不知道為啥
            await DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart })
            break
          }
        }
        //
      } else {
        result.height += 204
        result.productcount += 1
        result.cart.push(productInfo)
        const { afterprice } = await productall.findOne({ name: productInfo.name })
        result.count += (afterprice * productInfo.count)
        await DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart, height: result.height, productcount: result.productcount })
      }
    }
    res.end()
  })
})
module.exports = router
