// 1.這是用在vue的=>

// import axios from 'axios'

// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   console.log(4556445644)
//   if (window.localStorage.getItem('token')) {
//     config.headers.authorization = `${window.localStorage.getItem('token')}`
//   }
//   return config
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error)
// })

// 2.這是用在nuxt的方式 =>
export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log(4556445644)
    if (window.localStorage.getItem('token')) {
      config.headers.authorization = `${window.localStorage.getItem('token')}`
    }
    return config
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
