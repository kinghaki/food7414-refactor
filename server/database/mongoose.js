const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yizhi:h94u454s06g4@cluster0.kxxiq.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('數據庫連結成功'))
  .catch(() => console.log('數據庫連結失敗'))
module.exports = mongoose
