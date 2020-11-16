const mongoose = require('mongoose')
mongoose.connect(`${process.env.DATABASE_KEY}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('數據庫連結成功'))
  .catch(err => console.log(err))
module.exports = mongoose
