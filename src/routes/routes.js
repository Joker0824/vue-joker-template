// 配置总的路由表,不用单独配置再引入，不利于后期查找
const routes = [
  {
    path: '/',
    // redirect: '/demo/list',
    component: () => import('@/pages/test/index')
  },
  {
    path: '/test',
    component: () => import('@/pages/test/index'),
    children: [ {
      path: '',
      redirect: 'element/fuck'
    }, {
      path: 'element/:id?',
      component: () => import('@/pages/test/element/index')
    },

    {
      path: 'demo',
      alias: '/demo',
      component: () => import('@/pages/test/demo/index'),
      props: true,
      children: [
        {
          path: '',
          redirect: 'list'
        }, {
          path: 'list',
          name: 'list',
          alias: '/list',
          component: () => import('@/pages/test/login/list')
        }
      ]
    }, {
      path: 'login',
      component: () => import('@/pages/test/login/index')
    }]
  }
]

console.table(routes)
export default routes
