const mongoose = require('mongoose')
const DBCartschema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    default: [],
    required: true
  },
  count: {
    type: Number,
    default: 0,
    required: true
  }

})

const DBCart = mongoose.model('DBCart', DBCartschema)
// // 註冊頁面
// productall.create({ name: '555555', title: '44444444', beforeprice: 123, afterprice: 456 }).then((res) => {
//   console.log(res)
// })
module.exports = DBCart
