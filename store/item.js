export const item = {
  namespaced: true,
  state: {
    product: [],
    item: []
  },
  mutations: {
    updateproduct (state, payload) {
      state.product = payload
    },
    updateitem (state, payload) {
      state.item = payload
    }
  },

  actions: {
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
  },

  getters: {

  }
}
