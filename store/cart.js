
export const state = () => ({
  cart: [],
  count: 0,
  height: 500,
  productcount: 0
})
export const mutations = {
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
  },
  updateUSERCart (state, payload) {
    state.cart = payload.cart
    state.height = payload.height
    state.count = payload.count
    state.productcount = payload.productcount
  },
  updateDeleteUSERCart (state, payload) {
    state.cart = payload.cart
    state.height = payload.height
    state.count = payload.count
    state.productcount = payload.productcount
  },
  updateAddUSERCart (state, payload) {
    state.cart = payload.cart
    state.count = payload.count
  },
  updateSubUSERCart (state, payload) {
    state.cart = payload.cart
    state.count = payload.count
  },
  updateHandInputUSERCart (state, payload) {
    state.count = payload.count
    state.cart = payload.cart
  }
}

export const actions = {
  async getUSERCartProduct ({ commit }) {
    const api = '/api/USER/getUSERCart/product'
    const { data } = await this.$axios.get(api)
    commit('updateUSERCart', data)
  },
  async getUSERCartItem ({ commit }) {
    const api = '/api/USER/getUSERCart/item'
    const { data } = await this.$axios.get(api)
    commit('updateUSERCart', data)
  },
  async deleteUSERCart ({ commit }, payload) {
    const api = '/api/USER/AddDeleteUSERCart/deleteCart'
    const { data } = await this.$axios.post(api, payload)
    commit('updateDeleteUSERCart', data)
  },
  async addUSERCart ({ commit }, payload) {
    const api = '/api/USER/AddDeleteUSERCart/addCart'
    const { data } = await this.$axios.post(api, payload)
    commit('updateAddUSERCart', data)
  },
  async subUSERCart ({ commit }, payload) {
    const api = '/api/USER/AddDeleteUSERCart/subCart'
    const { data } = await this.$axios.post(api, payload)
    commit('updateSubUSERCart', data)
  },
  async handInputUSERCart ({ commit }, payload) {
    const api = '/api/USER/AddDeleteUSERCart/handInputCart'
    const { data } = await this.$axios.post(api, payload)
    commit('updateHandInputUSERCart', data)
  }
}

export const getters = {

}
