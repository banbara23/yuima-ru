<template>
  <div id="app">
    <navbar id="header" />
    <div id="contents" class="container">
      <!--<img src="./assets/logo.png">-->
      <router-view></router-view>
    </div>
    <myFooter id="footer"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import firebase from 'firebase'
import firebaseconfig from '../firebase-config.json'
firebase.initializeApp(firebaseconfig);

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
  font-size: 17px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#contents {
  flex: 1;
}
#footer {
  margin-top: 50px;
}
</style>
