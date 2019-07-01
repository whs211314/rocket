import ElementLocale from 'element-ui/lib/locale'
import ElementUI from 'element-ui'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 初始化实例
const i18n = new VueI18n()

// 加载element国际化
ElementLocale.i18n((key, value) => i18n.t(key, value))
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

export default i18n
