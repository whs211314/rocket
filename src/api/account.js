import axios from '../utils/http'

// 字典
export function batchQuery (formData) {
  return axios.post('/venus/basedata/system/dict/batchQuery', formData)
}

// 仓库
export function warehouseQuery (params) {
  return axios.get('/venus/basedata/warehouse/list', {
    params
  })
}

// 语言
export function getLangItems (params) {
  return axios.get('/venus/api/coreresource/i18n/getLangItems/v1', {
    params
  })
}
