<template lang="html">
    <ul class="pagination pagination-sm no-margin pull-right">
        <li v-if="cur!=1"><a v-on:click="previousPage" href="javascript:void(0)">上一页</a></li>
        <li v-for="page in pages" v-bind:class="{ active: cur == page}">
            <a v-on:click="toPage(page)" href="javascript:void(0)">{{ page }}</a>
        </li>
        <li v-if="cur!=all"><a v-on:click="nextPage" href="javascript:void(0)">下一页</a></li>
        <li><a>共{{all}}页</a></li>
    </ul>
</template>

<script>
  export default {
    props: ['cur', 'all'],
    data: function () {
      return {}
    },
    computed: {
      pages: function () {
        var left = 1
        var right = this.all
        var ar = []
        if (this.all >= 11) {
          if (this.cur > 5 && this.cur < this.all - 4) {
            left = this.cur - 5
            right = this.cur + 4
          } else {
            if (this.cur <= 5) {
              left = 1
              right = 10
            } else {
              right = this.all
              left = this.all - 9
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left++
        }
        return ar
      }
    },
    methods: {
      toPage: function (page) {
        this.$emit('page-change', page)
      },
      nextPage: function () {
        var page = this.cur + 1
        this.$emit('page-change', page)
      },
      previousPage: function () {
        var page = this.cur - 1
        this.$emit('page-change', page)
      }
    }
  }
</script>
