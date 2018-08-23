import axios from 'axios';
import qs from 'qs';
import Swal from 'sweetalert2';

export default function $axios(options) {
  // 配置axios
  const host = process.env.NODE_ENV === 'development' ? 'http://193.112.95.135:8081' : 'http://console.easyforkid.com'
  // console.log(host)
  return new Promise((resolve, reject) => {
    const Axios = axios.create({
      baseURL: host,
      timeout: 5000,
      responseType: 'json',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      }
    })
    // 请求拦截
    Axios.interceptors.request.use(
      config => {
        if (config.method.toLowerCase === 'post' || config.method.toLowerCase === 'put' || config.method.toLowerCase === 'delete') {
          config.data = qs.stringify(config.data)
        }
        if (sessionStorage.user) {
          let user = qs.stringify(sessionStorage.user)
          config.headers.Authorization = `Bearer ${user.accessToken}`
        }
        return config
      },

      error => {
        Swal({
          title: '请求发生了一个错误',
          text: error.data.error.message,
          type: 'error'
        })
        return Promise.reject(error.data.error.message)
      }
    )

    Axios.interceptors.response.use(
      response => {

      },

      error => {

      }
    )

    Axios(options).then((result) => {
      resolve(result)
      return false
    }).catch((error) => {
      reject(error)
    })
  })
}

// export default {
//   install: function(Vue, Option) {
//     Object.defineProperties(Vue.prototype, '$http', {value: Axios})
//   }
// }