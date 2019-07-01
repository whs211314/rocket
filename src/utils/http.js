import axios from 'axios'
// import { Message } from 'element-ui'
// import { getQueryString } from '@/libs/utils/url'
// import { transMsg } from './dict'
// import Config from '../StationCommon/common/config'

// const isStation = +getQueryString('station') || +getQueryString('isStation') === 1

axios.defaults.timeout = 60000
axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

// http request 拦截器
// axios.interceptors.request.use(
//   (config) => {
//     const token = getCookie('token');
//     const newConfig = config;
//     newConfig.data = JSON.stringify(config.data);
//     newConfig.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     };
//     if (token) {
//       newConfig.params = { token };
//     }
//     return newConfig;
//   },
//   (error) => {
//     if (error.response) {
//       Message.error('错了哦，这是一条错误消息');
//     }
//     Promise.reject(error);
//   },
// );

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if ([2, 3].includes(response.data.code)) {
      // const params = isStation ? `?isStation=1&station=${+getQueryString('station')}` : ''
      // eslint-disable-next-line
      // top.location.href = (Config.loginUrl) ? Config.loginUrl + params : `/static/html/login.html${params}`;
    }
    if (response.data.code !== 0 && response.data.code !== 2) {
      // Message({
      //   message: transMsg(response.data.msg),
      //   type: 'error',
      //   duration: 2 * 1000,
      //   showClose: true
      // })
    }
    const res = response
    // 统一处理页码返回0的问题
    if (res.data.data && res.data.data.currentPage === 0) {
      res.data.data.currentPage = 1
    }
    // res.data.config = response.config
    return res.data
  },
  (error) => {
    // Message({
    //   message: transMsg(error.message),
    //   type: 'error',
    //   duration: 2 * 1000,
    //   showClose: true
    // })
    Promise.reject(error)
  }
)

export default axios
