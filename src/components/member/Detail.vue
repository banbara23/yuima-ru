<template>
  <div>
    <h4>{{title}}</h4>
    
    <p>名前：なまえ</p>
    <p>コメント：がんばる</p>
    <p>画像</p>
    <img class="materialboxed" width="650" src="https://pbs.twimg.com/profile_images/527346536074600448/E57__gFU_400x400.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "メンバー詳細"
    };
  },
  created() {
    // this.title = $route.params.id;
    if (!$route.params.id) {
      this.title = $route.params.id;
    }
  }
};
</script>

<style>

</style>
