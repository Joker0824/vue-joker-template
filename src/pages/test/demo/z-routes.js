const routes = [
  {
    path: 'demo',
    name: 'demo',
    component: () => import('@/pages/test/demo/index'),
    props: true
  }
]

export default routes
