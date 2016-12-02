<template>
    <div class="wrapper">
        <app-header></app-header>
        <app-aside></app-aside>
        <div class="content-wrapper" style="min-height:916px;">
            <app-breadcrumd></app-breadcrumd>
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import appHeader from './layout/header'
  import appAside from './layout/aside'
  import appFooter from './layout/footer'
  import appBreadcrumd from './layout/breadcrumd'
  export default {
    components: {
      appHeader,
      appAside,
      appFooter,
      appBreadcrumd
    }
}
</script>
