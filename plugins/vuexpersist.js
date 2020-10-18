// 用來永久存取vuex的狀態
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    // 預設是window.localstorage
    storage: window.localStorage
  }).plugin(store)
}
