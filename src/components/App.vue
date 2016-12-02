<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        section: 'Head',
        version: '0.10.0',
        callingAPI: false,
        serverURI: 'http://my-cloud-api.app:8000/api',
        caller: this.$http
      }
    },
    methods: {
      callAPI: function (method, url, data) {
        this.callingAPI = true
        url = this.serverURI + url // if no url is passed then inheret local server URI
        return this.caller({
          url: url,
          method: method,
          data: data
        })
      },
      logout: function () {
        this.$store.dispatch('SET_USER', null)
        this.$store.dispatch('SET_TOKEN', null)
        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }
        this.$router.push('/login')
      }
    }
  }
</script>
