import demo from './demo/z-routes'
import login from './login/z-routes'
import element from './element/z-routes'
const children = [...demo, ...login, ...element]
const routes = [
  {
    path: '/test',
    component: () => import('@/pages/test/index'),
    children: children
  }
]

export default routes
