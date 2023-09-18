import createAxios from "../index";

// 登录
export const login = (data) => createAxios().post('/account/login', data)
// 注册
export const register = (data) => createAxios().post('/account/register', data)
// 判断token权限是否足够
export const isTokenPass = (data) => createAxios({ isToken: true }).get('/account/verifyToken', { params: data })





