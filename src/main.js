import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import routes from './routes'
import store from './store'
import App from './components/App.vue'

import { domain, count, prettyDate, pluralize } from './filters'
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)
Vue.use(Resource)

Vue.http.interceptors.push((request, next) => {
  var headers = request.headers
  // 进入系统前在header中添加token
  if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
    headers.Authorization = this.$store.state.token
  }
  // console.log(headers)
  next()
})

var router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // window.console.log('Transition', transition)
  if (to.auth && (to.router.app.$store.state.token === 'null')) {
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')

// Check local storage to handle refreshes
if (window.localStorage) {
  if (store.state.user !== window.localStorage.getItem('user')) {
    store.dispatch('SET_USER', JSON.parse(window.localStorage.getItem('user')))
    store.dispatch('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

