const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo/index'),
    props: true
  },
  {
    path: '/',
    component: () => import('@/pages/login/index')
  }
]

export default routes
