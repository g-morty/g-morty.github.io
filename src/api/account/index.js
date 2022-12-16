import createAxios from "../index";

// 登录注册
export const login = (data) => createAxios().post('/account/login', data)
export const register = (data) => createAxios().post('/account/register', data)






