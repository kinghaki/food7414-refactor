import Vue from 'vue'
import Vuex from 'vuex'
// import vuexLocal from '../plugins/vuexpersist'
import { item } from './item'
import { header } from './header'
import { cart } from './cart'
Vue.use(Vuex)
export default () => {
  return new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      item,
      header,
      cart
    }
  })
}
