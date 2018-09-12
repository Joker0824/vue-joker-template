const routes = [
  {
    path: 'element/:id',
    component: () => import('@/pages/test/element/index')
  },
  {
    path: '',
    component: () => import('@/pages/test/element/index')
  }
]

export default routes
