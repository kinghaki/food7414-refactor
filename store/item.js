
export const state = () => ({
  product: [],
  item: []
})
export const mutations = {
  updateproduct (state, payload) {
    state.product = payload
  },
  updateitem (state, payload) {
    state.item = payload
  },
  updatecartitem (states, payload) {
    payload.value.count = payload.counts
    this.state.cart.cart.push(payload.value)
  },
  // 把所有數量的值*各自單價加進來
  totalcountcartitem (states, payload) {
    this.state.cart.count += payload.counts * payload.value.afterprice
  },
  // 購物車項目+
  addcountcartitem (states, payload) {
    const that = this
    this.state.cart.cart.forEach((value, index) => {
      if (payload.value.name === value.name) {
        that.state.cart.cart[index].count += payload.counts
      }
    })
  }
}

export const actions = {
  async getproduct (context, payload) {
    const api = '/api/product/id'
    const { data } = await this.$axios.get(api, payload)
    context.commit('updateproduct', data)
  },
  async getitem ({ commit }, payload) {
    const api = 'api/shop/id'
    const { data } = await this.$axios.get(api, payload)
    commit('updateitem', data)
  }
}

export const getters = {

}
