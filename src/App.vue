<template>
    <div class="wrapper">
        <app-header></app-header>
        <app-aside></app-aside>
        <app-content></app-content>
    </div>
</template>

<script>
  import appHeader from './components/layout/header'
  import appAside from './components/layout/aside'
  import appContent from './components/layout/content'
  export default {
    name: 'app',
    components: {
      appHeader,
      appAside,
      appContent
    }
  }
</script>