import axios from '../../../utils/http'

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
