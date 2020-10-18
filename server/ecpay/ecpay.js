// const ecpay = require('ecpay_payment_nodejs_quick')
const randomstring = require('randomstring') // 用來產生隨機字福串
const moment = require('moment')
const initParm = () => {
  // date用來產生日期的格式
  const date = moment().format('YYYY/MM/DD HH:mm:ss')
  return {
    baseparam: {
      MerchantTradeNo: randomstring.generate({ length: 20, charset: 'alphanumeric' }), // 請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate: date,
      // ex: 2018/02/13 15:45:30 new Date() hour會少8小，所以使用gethour
      TotalAmount: '88',
      ChoosePayment: 'ATM',
      PaymentType: 'aio',
      TradeDesc: '交易描述',
      ItemName: '業新豪的3cm老二#老三',
      ReturnURL: 'https://55e9298f.ngrok.io/result',
      Remark: '交易備註',
      CustomField1: '紅色*1'
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
