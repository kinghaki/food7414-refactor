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
// productall.create({ name: '日式胡麻雞', title: '主餐', beforeprice: 129, afterprice: 119, img: 'https://i.ibb.co/6yYQqJC/japanchicken.webp' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '韓式辣醬雞', title: '主餐', beforeprice: 119, afterprice: 109, img: 'https://i.ibb.co/K6myT71/image.webp' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '泰式輕檸雞', title: '主餐', beforeprice: 129, afterprice: 119, img: 'https://i.ibb.co/4jTxFVH/image.webp' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '法式第戎豬', title: '主餐', beforeprice: 159, afterprice: 149, img: 'https://i.ibb.co/8sZTQh0/image.webp' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '炙燒牛小排', title: '主餐', beforeprice: 169, afterprice: 159, img: 'https://i.ibb.co/ck13gM4/image.webp' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '冷泡茶', title: '飲品', beforeprice: 49, afterprice: 39, img: 'https://i.ibb.co/gPQ3GSV/oolongtea.jpg' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '蜂蜜檸檬', title: '飲品', beforeprice: 49, afterprice: 39, img: 'https://i.ibb.co/zHsPPys/honeylemon.jpg' }).then((res) => {
//   console.log(res)
// })
// productall.create({ name: '蘋果汁', title: '飲品', beforeprice: 49, afterprice: 39, img: 'https://i.ibb.co/sPdSkZ5/applejuice.jpg' }).then((res) => {
//   console.log(res)
// })
module.exports = productall
