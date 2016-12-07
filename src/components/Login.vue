<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="/"><b>DEV</b>后台管理</a>
        </div>
        <div class="login-box-body">
            <p class="login-box-msg">登录</p>
            <form action="/" method="get" @submit.prevent="checkCreds">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="注册邮箱" name="email" v-model="email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="密码" name="password" v-model="password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div v-if=response class="text-red"><p>{{response}}</p></div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" v-bind:class="'btn btn-primary btn-block btn-flat ' + loading" >登录</button>
                    </div>
                </div>
            </form>
            <a href="register">注册一个新的账号</a> &nbsp;|&nbsp; <a href="/">忘记密码</a>
        </div>
    </div>
</template>
<script>
module.exports = {
  name: 'Login',
  data: function (router) {
    return {
      loading: '',
      email: '',
      password: '',
      response: ''
    }
  },
  methods: {
    checkCreds: function () {
      //  Change submit button
      var self = this
      var store = this.$store
      this.toggleLoading()
      this.resetResponse()
      store.commit('TOGGLE_LOADING')
      //  Login
      this.$http.post(store.state.serverURI + '/login', {email: this.email, password: this.password}).then(function (response) {
        store.commit('TOGGLE_LOADING')
        if (response.data) {
          var data = response.data
          if (data.error) {
            if (data.error.name) { //  Object from LDAP at this point
              switch (data.error.name) {
                case 'InvalidCredentialsError' : self.response = 'Username/Password incorrect. Please try again.'; break
                default: self.response = data.error.name
              }
            } else {
              self.response = data.error
            }
          } else {
            //  success. Let's load up the dashboard
            if (data.user) {
              store.commit('SET_USER', data.user)
              var token = 'Bearer ' + data.token
              store.commit('SET_TOKEN', token)
              // Save to local storage as well
              if (window.localStorage) {
                window.localStorage.setItem('user', JSON.stringify(data.user))
                window.localStorage.setItem('token', token)
              }
              this.$router.push('/')
            }
          }
        } else {
          self.response = 'Did not receive a response. Please try again in a few minutes'
        }
        self.toggleLoading()
      }, function (response) {
        // error
        store.commit('TOGGLE_LOADING')
        console.log('Error', response)
        self.response = '用户名或密码错误！'
        self.toggleLoading()
      })
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>
