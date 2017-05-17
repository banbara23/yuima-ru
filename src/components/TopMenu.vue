<template>
  <div class="menu">
    <p>{{msg}}</p>
    <div class="col s12">
      <a href="#">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              出席登録
            </span>
            <p>練習への参加登録はこちら</p>
          </div>
        </div>
      </a>
    </div>

    <!--メンバー-->
    <div class="col s12">
      <a href="#">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              メンバー
            </span>
            <p>ゆかいな仲間たち</p>
          </div>
        </div>
      </a>
    </div>

    <!--部費-->
    <div class="col s12">
      <a href="#">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              部費（作成中）
            </span>
            <p>(￥v￥)</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data() {
    return {
      msg: 'Welcome to ゆいま〜る'
    }
  }
}
</script>