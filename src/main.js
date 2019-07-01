// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from '@/utils/http'
import Element from 'element-ui'
import echarts from 'echarts'
// 引入中国地图依赖
import 'echarts/map/js/china'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from '@/assets/icon/iconfont.css' // icon全局css,iconfont图标组建库http://www.iconfont.cn
// 国际化相关
// import szLoadLang from './plugins/sz_LoadLang'
// import szLangZhCn from './locale/lang/zh-CN'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// import {getLangItems} from './api/account'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n/i18n'
import 'echarts/extension/bmap/bmap'

Vue.use(Icon)
Vue.use(Element)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 处理国际化设置
// Vue.use(szLoadLang, {
//   i18n,
//   router,
//   axios,
//   langUrl: '/venus/api/coreresource/i18n/getLangItems/v1',
//   setLangCallBack (data, lang) {
//     let others = {}
//     if (lang === 'zh-CN') {
//       others = { ...szLangZhCn, ...zhLocale }
//     }
//     // 修改参数必须返回个json
//     return { c: data || {}, ...others }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
