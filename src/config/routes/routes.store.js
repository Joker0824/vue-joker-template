// 引入业务路由
import test from '@/pages/test/z-routes'

// 添加进主路由
const routes = [{
  path: '/',
  /* 主页重定向到/test */
  redirect: '/test',
  component: () => import('@/pages/test/index')
}, ...test]

console.table(routes)

export default routes
