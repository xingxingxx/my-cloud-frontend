const routes = [
  {
    path: '/login',
    component: require('./components/Login.vue')
  },
  {
    path: '/',
    component: require('./components/Main.vue'),
    meta: { auth: true },
    children: [
      {
        path: '',
        component: require('./components/index/index.vue'),
        name: 'Dashboard',
        meta: { description: '我的面板' }
      },
      {
        path: '/bookmark',
        component: require('./components/bookmark/index.vue'),
        name: 'Bookmark',
        meta: { description: '云书签' },
        children: [
          {
            path: 'create',
            component: require('./components/bookmark/create.vue'),
            name: 'BookMarkCreate',
            meta: { description: '新增书签' }
          },
          {
            path: 'edit',
            component: require('./components/bookmark/edit.vue'),
            name: 'BookMarkEdit',
            meta: { description: '编辑书签' }
          }
        ]
      },
      {
        path: '/article',
        component: require('./components/article/index.vue'),
        name: 'Article',
        meta: { description: '云文章' }
      }
    ]
  },
  {
    path: '*',
    component: require('./components/404.vue')
  }
]

export default routes
