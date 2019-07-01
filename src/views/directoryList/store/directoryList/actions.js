// import { batchQuery, warehouseQuery } from '../../api/directoryList'
import * as types from './mutation-types'

// const objectCodes = [
//   'action_type',
//   'function_type',
//   'register_type',
//   'system_code'
// ]
const dictRet = {a: 1, b: 2}
export function getBaseInfo ({ commit }) {
  return new Promise((resolve, reject) =>
    // Promise.all([batchQuery({ objectCodes }), warehouseQuery({})])
    //   .then(resArr => {
  // const [dict, areaList] = resArr
  // const toCamel = e => e.replace(/_(\w)/g, ($0, $1) => $1.toUpperCase())
  // 字典
  // const dictRet = {}
  // Object.keys(dict.data).forEach(e => {
  //   dictRet[toCamel(e)] = dict.data[e].details
  // })
    commit(types.SET_DICT, dictRet)
    // 仓库
    // commit(types.SET_WAREHOUES_QUERY_ALL, dictRet)
    // resolve()
    // })
    // .catch(err => {
    //   reject(err)
    // })
  )
}

export function setDict () {}
