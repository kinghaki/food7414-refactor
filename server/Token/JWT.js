const JWT = require('jsonwebtoken')
const JWTS = {
  generateToken (data) {
    // let cert = fs.readFileSync(path.join(__dirname, '../pem/private_key.pem'));//私钥 可以自己生成

    // 如果要設置expiresin的時間，payload要設置物件
    const token = JWT.sign(
      { data },
      'this is sign', { expiresIn: 600000 })
    return token
  },
  checkToken (token) {
    try {
      const decoded = JWT.verify(token, 'this is sign')
      return decoded
    } catch (err) {
      return 'error'
    }
  }
}
module.exports = JWTS
