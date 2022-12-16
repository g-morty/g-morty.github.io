// 验证token权限是否允许通过该路由。
function verifyToken(to, _, next) {
  // 获取所需权限等级
  const authLevel = to.meta.authLevel;
  // 验证本地是否有token
  const token = localStorage.getItem("token");
  // 如果本地token为空，跳转至登录页面
  if (token === null) {
    return next("/sign");
  }
  // 验证token是否能通过验证
  
  // 如果通过继续
  // 如果未通过跳转至登录页面

  console.log({ authLevel });
  next()
}

export default verifyToken