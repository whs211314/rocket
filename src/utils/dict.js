import i18n from '@/i18n/i18n'

/**
 * 将字典和下拉处理成指定形式返回
 * @param {Array} items
 * @param {String} key
 * @param {String} value
 */
export function dictProcessor (items, key = 'fieldCode', value = 'fieldValue') {
  const dictRet = {}
  const dropRet = []
  items.forEach(e => {
    dictRet[e[key]] = e[value]
    dropRet.push({ value: e[key], label: e[value] })
  })
  return {
    dict: dictRet,
    drop: dropRet
  }
}

export function dictProcessorWithLang (
  items,
  key = 'fieldCode',
  value = 'fieldValue'
) {
  const dictRet = {}
  const dropRet = []
  items.forEach(e => {
    const itemValue = i18n.t("c['" + e[value] + "']")
    dictRet[e[key]] = itemValue
    dropRet.push({ value: e[key], label: itemValue })
  })
  return {
    dict: dictRet,
    drop: dropRet
  }
}

export function transMsg (text) {
  if (!text) return text
  let item
  try {
    item = JSON.parse(text)
    if (Object.prototype.toString.call(item) !== '[object Object]') {
      return i18n.t(text)
    }
  } catch (error) {
    return i18n.t(text)
  }

  if (item.p) {
    return i18n.t(item.c, item.p.map(x => transMsg(x)))
  }
  return i18n.t(item.c)
}
