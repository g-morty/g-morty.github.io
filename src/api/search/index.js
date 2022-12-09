import createAxios from "../index";

// 登录
export const search = (data) => createAxios().get('/baidu/sugrec', { params: data })
