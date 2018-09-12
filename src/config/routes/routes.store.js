// 引入业务路由
import demo from '@/pages/demo/z-routes'
import login from '@/pages/login/z-routes'
import element from '@/pages/element/z-routes'

// 添加进主路由
let routes = [...demo, ...login, ...element]
console.log(routes)
export default routes
