const express = require('express')
const router = express.Router()
const productall = require('../database/productall')
// const productdrink = require('../database/productdrink')
// const productmain = require('../database/productmain')
router.get('/id', (req, res) => {
  console.log(req.query.id)
  switch (req.query.id) {
    case 'all':
      productall.find({}).then((data) => {
        res.json(data)
      })
      break
    case 'main':
      productall.find({ title: '主餐' }).then((data) => {
        res.json(data)
      })
      break
    case 'drink':
      productall.find({ title: '飲品' }).then((data) => {
        res.json(data)
      })
      break
    // 用來展示自己搜尋的商品展示頁面
    case 'search':

      productall.find({}).then((data) => {
        const newdata = []
        data.forEach((value) => {
          if (value.name.includes(req.query.search) || value.title.includes(req.query.search)) {
            newdata.push(value)
          }
        })
        res.json(newdata)
      }
      )
  }
}
)

// router.get('/item', (req,res) => {
//   productall.find
// })

module.exports = router
