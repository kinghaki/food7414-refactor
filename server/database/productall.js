// 在product/all
const mongoose = require('mongoose')
const productschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  beforeprice: {
    type: Number,
    required: true
  },
  afterprice: {
    type: Number,
    required: true
  }

})

const productall = mongoose.model('productall', productschema)
// // 註冊頁面
// productall.create({ name: '555555', title: '44444444', beforeprice: 123, afterprice: 456 }).then((res) => {
//   console.log(res)
// })
module.exports = productall
