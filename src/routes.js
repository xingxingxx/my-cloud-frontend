const routes = [
  {
    path: '/login',
    component: require('./components/Login.vue')
  },
  {
    path: '/',
    component: require('./components/Main.vue'),
    auth: true,
    children: [
      {
        path: '',
        component: require('./components/index/index.vue'),
        name: 'Dashboard',
        description: '我的面板'
      },
      {
        path: '/bookmark',
        component: require('./components/bookmark/index.vue'),
        name: 'Bookmark',
        description: '云书签'
      },
      {
        path: '/article',
        component: require('./components/article/index.vue'),
        name: 'Article',
        description: '云文章'
      }
    ]
  },
  {
    path: '*',
    component: require('./components/404.vue')
  }
]

export default routes
