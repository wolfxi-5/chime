import axios from 'axios'


const instance = axios.create({

  // baseURL: 'http://localhost:8080',
  baseURL: 'http://jsonplaceholder.typicode.com',
  timeout: 3000,
  // headers: {
  //   post: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   }
  // }
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 例子：登录状态（token:''） 需要登录的接口
  // 自定义header，可添加项目token
  // if (store.state.app.token) {
  //   config.headers.token = store.state.app.token;
  //   config.headers.timestamp = new Date().getTime();
  // }
  
  //在发送请求前做些什么
  return config;
}, error => {
  //在请求错误的时候做些什么
  return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(response => {
  // const resCode = response.status;
  // if (resCode === 200) {
  //   return Promise.resolve(response);
  // } else {
  //   return Promise.reject(response);
  // }
  
  //请求成功对响应数据做处理
  return response;
}, error => {
  const resCode = error.response.status;
  switch (resCode) {
    case 401:
      vm.$Message.error(error.response.data.message);
      store.commit('logout', this);
      store.commit('clearOpenedSubmenu');
      router.replace({
        name: 'login'
      });
      break;
    case 404:
      vm.$Message.error('网络请求不存在');
      break;
    case 500:
      vm.$Message.error('服务器连接错误');
      break;
    // 其他状态码错误提示
    default:
      vm.$Message.error(error.response.data.message);
  }

  //响应错误做些什么
  return Promise.reject(error);
})

/*
 *封装get方法
 *@param{String} url [请求地址]
 *@param{Object} params 请求参数
 */
export function Get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}

/**
 *封装post方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}

/**
 *封装put方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Put(url, params) {
  return new Promise((resolve, reject) => {
    instance.put(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}

/**
 *封装patch方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Patch(url, params) {
  return new Promise((resolve, reject) => {
    instance.put(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}

/**
 *封装delete方法
 *@param{String} url [请求地址]
 *@param{Object} params [请求参数]
 */
export function Delete(url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}