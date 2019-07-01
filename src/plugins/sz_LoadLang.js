/**
 *  动态处理加载语言包
 * import szLoadLang from "@/libs/plugins szLoadLang";
 * Vue.use szLoadLang, {
  i18n, // i18n对象
  router,// router对象
  axios,// axios对象
  langUrl: apiStore.common.getLangItems.url,// lang语言对象
  setLangCallBack(data) {// 修改参数必须返回个json
    return { c: data || {}, ...zhLocale };
  }
});
 *
 */

const szLoadLang = {}
szLoadLang.install = (
  vue,
  { i18n, router, axios, langUrl, setLangCallBack }
) => {
  if (!i18n || !router || !axios || !langUrl || !setLangCallBack) {
    throw new Error(
      `请传入必填参数【i18n||router||axios||langUrl||setLangCallBack】`
    )
  }
  // 记录当前已下载语言
  const loadedLanguages = []

  const transformLang = lang => {
    let curLang = lang
    switch (lang) {
      case 'en_us':
      case 'en':
      case 'en-US':
      case 'en-GB':
      case 'en-CA':
        curLang = 'en-US'
        break
      case 'ja':
        curLang = 'ja-jp'
        break
      default:
        break
    }
    return curLang.replace('-', '_').toLocaleLowerCase()
  }

  // 设置i18n的语言
  const setI18nLanguage = lang => {
    i18n.locale = lang
    localStorage.setItem('language', lang)
    axios.defaults.headers.common['Accept-Language'] = transformLang(lang)
    document.querySelector('html').setAttribute('lang', lang)
    return lang
  }

  // 异步加载对应的语言包
  const loadLanguageAsync = lang => {
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return new Promise((resolve) => {
          axios
            .get(langUrl, {
              params: {
                languageCode: transformLang(lang)
              }
            })
            .then(({ data }) => {
              i18n.setLocaleMessage(lang, setLangCallBack(data, lang))
              loadedLanguages.push(lang)
              resolve(lang)
              return setI18nLanguage(lang)
            })
        })
      }
      return Promise.resolve(setI18nLanguage(lang))
    }
    return Promise.resolve(lang)
  }

  // router过滤
  router.beforeEach((to, from, next) => {
    const getLang =
      localStorage.getItem('language') || window.navigator.language
    // 进入之前检查语言包
    loadLanguageAsync(getLang)
      .then(() => next())
      .catch(() => next())
  })

  // TODO注册一个全局的change方法
  vue.prototype.$setLangs = loadLanguageAsync

  // 获取当前lang
  vue.prototype.$getLang = () =>
    document.querySelector('html').getAttribute('lang')
}

export default szLoadLang
