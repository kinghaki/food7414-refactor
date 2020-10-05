export const header = {
  namespaced: true,
  state: {
    clickdata: ''
  },
  mutations: {
    updateheaderinput (state, payload) {
      state.clickdata = payload
    }
  },

  actions: {
    async headerinput ({ commit }, payload) {
      let newdata = ''
      if (payload.length < 1) {
        const api = '/api/header/click'
        const { data } = await this.$axios.get(api)
        newdata = data
      } else {
        const api = '/api/header/input'
        const { data } = await this.$axios.get(api, {
          params: {
            value: payload
          }
        })
        newdata = data
      }

      commit('updateheaderinput', newdata)
    }
  },

  getters: {

  }
}
