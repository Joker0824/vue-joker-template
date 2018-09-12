const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo/index'),
    props: true
  }
]

export default routes
