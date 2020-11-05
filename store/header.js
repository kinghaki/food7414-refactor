
export const state = () => ({
  clickdata: [],
  frontwaitfixed: '',
  // 看有無登入圖示
  usereditimg: true
})
export const mutations = {
  updateheaderinput (state, payload) {
    state.clickdata = payload
  },
  updatefrontwaitfixed (state) {
    state.frontwaitfixed = 'frontwaitfixed'
  },
  deletefrontwaitfixed (state) {
    state.frontwaitfixed = ''
  },
  updateproductcount (state) {
    state.productcount++
  },
  updatenegproductcount (state) {
    state.productcount--
  },
  updatelogin (state) {
    state.usereditimg = false
  },
  updatelogout (state) {
    state.usereditimg = true
  }
}

export const actions = {
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

}

export const getters = {

}
