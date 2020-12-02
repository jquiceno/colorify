<template>
  <div id="app" >
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
