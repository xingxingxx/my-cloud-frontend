const routes = [
  {
    path: '/login',
    component: require('./components/Login.vue')
  },
  {
    path: '/',
    component: require('./components/Main.vue'),
    meta: {auth: true},
    children: [
      {
        path: '',
        component: require('./components/index/index.vue'),
        name: 'Dashboard',
        meta: {description: '我的面板'}
      },
      {
        path: '/bookmark',
        component: require('./components/bookmark/index.vue'),
        name: 'Bookmark',
        meta: {description: '云书签'}
      },
      {
        path: '/bookmark-category',
        component: require('./components/bookmark/category/index.vue'),
        name: 'BookmarkCategory',
        meta: {description: '云书签分类'}
      },
      {
        path: '/article',
        component: require('./components/article/index.vue'),
        name: 'Article',
        meta: {description: '云文章'}
      },
      {
        path: '/article-category',
        component: require('./components/article/category.vue'),
        name: 'ArticleCategory',
        meta: {description: '云文章分类'}
      },
      {
        path: '/article-sign',
        component: require('./components/article/sign.vue'),
        name: 'ArticleSign',
        meta: {description: '云文章标签'}
      }
    ]
  },
  {
    path: '*',
    component: require('./components/404.vue')
  }
]

export default routes
