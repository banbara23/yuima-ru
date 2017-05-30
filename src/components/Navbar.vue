<template>
  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo center">ゆいま〜る</a>
      <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/schedule">出席登録</a></li>
        <li><a href="/member">メンバー</a></li>
        <li><a href="/buhi">部費</a></li>
      </ul>
      <ul class="side-nav" id="mobile-nav">
        <li><a href="/schedule">出席登録</a></li>
        <li><a href="/member">メンバー</a></li>
        <li><a href="/buhi">部費</a></li>
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
