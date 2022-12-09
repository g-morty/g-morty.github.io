import axios, { AxiosError } from "axios";


/**
 * 创造axios实例函数
 * */
function createAxios(isToken = false) {
  // 创造axios实例
  const requests = axios.create({
    baseURL: '/api'
  })

  // axios请求拦截器
  requests.interceptors.request.use((config) => {
    // 如果需要携带token
    if (isToken) {
      // 获取本地token
      const localToken = localStorage.getItem('token');
      // 如果有本地token
      if (!!localToken) {
        // 将token添加至headers
        config.headers.Authorization = localToken;
      } else {
        // 如果没有token，终止请求，抛出错误
        throw new AxiosError('token is null', AxiosError.ERR_BAD_REQUEST, config, 'abc')
      }
    }
    return config;
  })
  // 响应拦截器
  requests.interceptors.response.use(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      return res
    }
  })
  return requests;
}

export default createAxios;