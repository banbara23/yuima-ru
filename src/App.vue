<template>
  <div id="app">
    <navbar />
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <myFooter />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    navbar: Navbar,
    myFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
