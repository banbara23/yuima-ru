<template>
  <div class="menu">
    <p>{{msg}}</p>
    <div class="col s12">
      
      <router-link to="schedule">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              出席登録
            </span>
            <p>練習への参加登録はこちら</p>
          </div>
        </div>
      </router-link>
    </div>

    <!--メンバー-->
    <div class="col s12">
      <router-link to="member">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              メンバー
            </span>
            <p>ゆかいな仲間たち</p>
          </div>
        </div>
      </router-link>
    </div>

    <!--部費-->
    <div class="col s12">
      <router-link to="buhi">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              部費（作成中）
            </span>
            <p>(￥v￥)</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      msg: "Welcome to ゆいま〜る"
    };
  }
};
</script>