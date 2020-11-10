const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yizhi:h94u454s06g4@cluster0.rnuv4.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('數據庫連結成功'))
  .catch(err => console.log(err))
module.exports = mongoose
