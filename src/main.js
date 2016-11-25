import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: require('./components/content/home.vue')},
    {path: '/about', component: require('./components/content/about.vue')},
    {path: '/book', component: require('./components/content/book.vue')},
    {path: '/book/create', component: require('./components/content/book/create.vue')},
    {path: '/book/edit', component: require('./components/content/book/edit.vue')},
    {path: '/post', component: require('./components/content/post.vue')},
    {path: '/post/create', component: require('./components/content/post/create.vue')},
    {path: '/post/edit', component: require('./components/content/post/edit.vue')},
    {path: '/post/show', component: require('./components/content/post/show.vue')}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
