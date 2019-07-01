import Vue from 'vue'
import Vuex from 'vuex'
// 应用维护
// ******************避免业务复杂，单个模块调用
import directoryList from '../views/directoryList/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    directoryList
  }
})
