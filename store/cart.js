
export const cart = {
  namespaced: true,
  state: {
    cart: [],
    count: 0,
    height: 500
  },
  mutations: {
    // 在product葉面添加項目到checkout
    updatecart (state, payload) {
      state.cart.push(payload)
    },
    // 刪除購物車項目
    deletecart (state, payload) {
      const data = state.cart.filter((value) => {
        if (value === payload.item) {
          state.count -= payload.item.afterprice * payload.item.count
          return false
        }
        return true
      }

      )
      state.cart = data
    },
    // 購物車項目+1
    addcountcart (state, payload) {
      state.cart.forEach((value, index) => {
        if (payload.name === value.name) {
          // this.commit('cart/totalcountcart', value.afterprice)
          state.cart[index].count++
        }
      })
    },
    // 購物車項目-1
    subcountcart (state, payload) {
      this.commit('cart/totalcountcart', (-payload.item.afterprice))
      state.cart[payload.index].count--
    },
    // 在product頁面如果checkout有東西，+1
    pluscountcart (state, payload) {
      state.count += payload.item.afterprice
      state.cart[payload.index].count++
    },
    // 把所有數量的值*各自單價加進來
    totalcountcart (state, payload) {
      state.count += payload
    },
    // 手動輸入的數量值
    inputcountcart (state, payload) {
      state.cart[payload.index].count = payload.value
    },
    // 添加新產品增加高度
    updatecountheight (state, payload) {
      state.height += payload
    }
  },

  actions: {

  },

  getters: {

  }
}
