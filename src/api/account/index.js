import createAxios from "../index";

// 登录
export const login = (data) => createAxios().post('/account/login', data)






