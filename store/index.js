import Vue from 'vue'
import Vuex from 'vuex'
import { item } from './item'
import { header } from './header'
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
      header
    }
  })
}
