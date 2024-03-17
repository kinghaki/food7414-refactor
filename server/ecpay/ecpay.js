// const ecpay = require('ecpay_payment_nodejs_quick')
const randomstring = require('randomstring') // 用來產生隨機字福串
const moment = require('moment')
const initParm = (cart, total) => {
  // date用來產生日期的格式
  const date = moment().format('YYYY/MM/DD HH:mm:ss')
  const items = []
  // console.log(cart[0])
  // console.log(JSON.parse(cart))
  for (const i in cart) {
    items.push(cart[i].name)
  }
  const itemname = items.join('#')
  return {
    baseparam: {
      MerchantTradeNo: randomstring.generate({ length: 20, charset: 'alphanumeric' }), // 請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate: date,
      // ex: 2018/02/13 15:45:30 new Date() hour會少8小，所以使用gethour
      TotalAmount: String(total),

      // ingnore設定無效，要看使用方法
      IgnorePayment: 'ATM#CVS#BARCODE',

      ChoosePayment: 'ALL',
      PaymentType: 'aio',
      TradeDesc: '交易描述會在哪',
      ItemName: itemname,
      ReturnURL: 'https://food7414.onrender.com/',
      // Remark: '交易備註',
      // CustomField1: '紅色*1',
      // 若使用Server端接收參數，付款完成、取號完成頁面上會出現
      // 「返回商店」按鈕 ，用來返回您的商店網站的。
      ClientBackURL: 'https://food7414.onrender.com/login/',

      // 當消費者付款完成後，綠界會將付款結果參數以幕前(Client POST)回傳到該網址。
      // OrderResultURL: 'https://food7414.onrender.com/login/',

      // 消費者使用非即時性付款(ATM、超商代碼、超商條碼)
      // 訂單建立完成後，綠界科技會以Client POST
      // 方式傳送付款相關資訊，並將使用者的畫面轉導到商家指定的頁面
      ClientRedirectURL: 'https://food7414.onrender.com/'

      // 當消費使用 ATM/CVS/BARCODE 付款方式取號完成後，特店的server端接受綠界的取號結果訊息，並回應接
      // 收訊息
      // PaymentInfoURL: 'https://localhost:5001/api/USER/ecpay/ATMM'
    },
    inv_params: {
      RelateNumber: randomstring.generate({ length: 30, charset: 'alphanumeric' }), // 請帶30碼uid ex: SJDFJGH24FJIL97G73653XM0VOMS4K
      CustomerID: '', // 會員編號
      CustomerIdentifier: '', // 統一編號
      CustomerName: '測試買家',
      CustomerAddr: '測試用地址',
      CustomerPhone: '0123456789',
      CustomerEmail: 'johndoe@test.com',
      ClearanceMark: '2',
      TaxType: '1',
      CarruerType: '', // [CarruerType] Cannot be 1 or 2 when [CustomerIdentifier] is given.
      // [CarruerType] can not be empty when [CustomerID] is not empty.
      CarruerNum: '',
      Donation: '0',
      LoveCode: '1234567',
      Print: '0',
      InvoiceItemName: '測試商品1|測試商品2',
      InvoiceItemCount: '2|3',
      InvoiceItemWord: '個|包',
      InvoiceItemPrice: '35|10',
      InvoiceItemTaxType: '1|1',
      InvoiceRemark: '測試商品1的說明|測試商品2的說明',
      DelayDay: '0',
      InvType: '07'
    }
  }
}

module.exports = initParm
