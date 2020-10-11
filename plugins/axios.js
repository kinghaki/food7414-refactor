import axios from 'axios'
// import Vue from 'vue'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = `${localStorage.getItem('token')}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
