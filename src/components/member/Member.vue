<template>
  <div class="member">
    <!--<h5>メンバー</h5>-->
    
    <div class="section" v-cloak>
      <div class="row">
        <h2>メンバー</h2>
        <p>We are a team of professional from Volly Ball</p>
        <div class="s12 center">
            <div class="image-container">
              <img class="responsive-img" src="../../assets/member_all.jpg" style="width:100%;">
            </div>
          </div>
      </div>
      <div class="row " v-for="item in anArray">
        <div class="col s12 m3 center-on-small-only">
            <div class="">
              <img class="circle responsive-img" src="../../assets/alvin.png">
            </div>
        </div>
        <div class="col s12 m9">
          <h4>{{ item.name }}</h4>
          <p>ポジション：{{ item.position}}</p>
          <p>コメント：{{ item.comment }}</p>
          <router-link to="member/new" class="waves-effect waves-teal btn-flat"><i class="material-icons">mode_edit</i></router-link>
        </div>
      </div>
    </div>
  
    <router-link to="member/new" class="waves-effect waves-light btn">
      <i class="material-icons left">add</i>追加</router-link>
  </div>
</template>

<script>
// import TopMenu from '@/components/TopMenu'
export default {
  name: 'member',
  data() {
    return {
      msg: 'member',
      anArray: []
    }
  },
  created() {
    this.anArray = [
      {
        name: 'モジャ',
        position: 'センター',
        comment: 'オレにボールが上がったらあとはアクビでもしてな、終わった頃には点が入ってるぜ'
      },
      {
        name: 'ゆうた',
        position: 'セッター',
        comment: 'この正確無二なトスの前に相手ブロッカーは平伏せよ'
      },
      {
        name: 'いとう',
        position: 'ライト',
        comment: "アタイの前にフェイントを落とす勇気があるならやってみな"
      },
      {
        name: 'はこじま',
        position: 'すべて',
        comment: 'このサーブを受け止める自信があるやつは前にでろ、粉々にしてくれるわ'
      }
    ]
  }
}
</script>

<style>
* {
      box-sizing: inherit;
}
.image-container {
  max-width: 100%;
}

</style>