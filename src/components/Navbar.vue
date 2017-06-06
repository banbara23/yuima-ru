<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo center">ゆいま〜る</router-link>
      <router-link to="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></router-link>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/schedule">出席登録</router-link></li>
        <li><router-link to="/member">メンバー</router-link></li>
        <li><router-link to="/buhi">部費</router-link></li>
      </ul>
      <ul class="side-nav" id="mobile-nav">
        <li><router-link to="/schedule">出席登録</router-link></li>
        <li><router-link to="/member">メンバー</router-link></li>
        <li><router-link to="/buhi">部費</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    $(".button-collapse").sideNav();
  }
}
</script>
