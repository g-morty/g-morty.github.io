import { isTokenPass } from "../api/account"
// 验证token权限是否允许通过该路由。
async function verifyToken(to, _, next) {
  console.log(to);
  if (to.path === '/') {
    // 获取所需权限等级
    const authLevel = to.meta.authLevel;
    // 验证本地是否有token
    const token = localStorage.getItem("token");
    // 如果本地token为空，跳转至登录页面
    if (token === null) {
      return next("/sign");
    }
    // 验证token是否能通过验证
    const isPassRes = await isTokenPass({ authLevel });
    console.log({ isPassRes, authLevel });
    // 通过放行，未通过跳转至登录
    (isPassRes.isPass) ? next() : next('/sign')
  }
else{
  next()
}
}

export default verifyToken