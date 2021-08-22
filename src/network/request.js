import axios from 'axios'

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    // baseURL: 'codewhy',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截：处理config中的一些信息
  instance.interceptors.request.use(config=>{
    return config
  },error => {

  })

  // 2.2响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },error => {

  })

  // 3.发送真正的网络请求  instance(config)本身就是promise
  return instance(config)
}
